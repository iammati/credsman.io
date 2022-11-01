<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/solid';
import SlideToggle from '../Animations/SlideToggle';
import GetElementPosition from '../Utility/GetElementPosition';
import { useForm } from '@inertiajs/inertia-vue3';
import { ref } from 'vue';
import ConfirmationModal from '@/Components/ConfirmationModal.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import DangerButton from '@/Components/DangerButton.vue';
import { notify } from '../Utility/Notify';

const props = defineProps({
    vaultId: Number,
    data: Object,
});

const toggle = e => {
    /** @type {HTMLDivElement} */
    const body = e.currentTarget.nextSibling;

    /** @type {HTMLOrSVGElement} */
    const icon = e.currentTarget.querySelector('.arrow-icon svg');

    new SlideToggle(body).finally(
        () => {
            const top = new GetElementPosition(body).top;

            if (top !== 0) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = '';
            }
        }
    );
};

const groupBeingDeleted = ref(null);
const deleteGroupForm = useForm();

const confirmGroupDeletion = (e, data) => {
    e.stopImmediatePropagation() && e.preventDefault();
    groupBeingDeleted.value = data;
};

const deleteGroup = () => {
    deleteGroupForm.delete(route('vaults.datas.groups.destroy', {
        dataId: groupBeingDeleted.value.id,
    }), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
            notify('info', `Deleted group „${groupBeingDeleted.value.group_name}“`);
            groupBeingDeleted.value = null;
        },
    });
};
</script>

<template>
    <div class="accordion">
        <div
            @click="toggle"
            class="head"
        >
            <div class="flex items-center p-3">
                <div class="slot">
                    <slot name="head" />
                </div>

                <div class="w-full flex justify-end items-center gap-2">
                    <div class="arrow-icon icon-hover">
                        <ChevronDownIcon class="w-5 h-5" />
                    </div>

                    <div
                        @click="confirmGroupDeletion($event, data)"
                        class="delete icon-hover"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <div class="body hidden">
            <div class="px-3">
                <slot name="body" />
            </div>
        </div>
    </div>

    <ConfirmationModal :show="groupBeingDeleted != null" @close="groupBeingDeleted = null">
        <template #title>
            Delete Group – „{{ data.group_name }}“
        </template>

        <template #content>
            Are you sure you would like to delete this group?
        </template>

        <template #footer>
            <SecondaryButton @click="groupBeingDeleted = null">
                Cancel
            </SecondaryButton>

            <DangerButton
                class="ml-3"
                :class="{ 'opacity-25': deleteGroupForm.processing }"
                :disabled="deleteGroupForm.processing"
                @click="deleteGroup"
            >
                Delete
            </DangerButton>
        </template>
    </ConfirmationModal>
</template>

<style lang="scss" scoped>
.accordion {
    .head {
        cursor: pointer;

        .arrow-icon {
            svg {
                transition: .3s;
                margin-inline-start: auto;
            }
        }
    }
}
</style>
