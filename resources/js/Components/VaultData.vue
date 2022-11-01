<script setup>
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import { LockClosedIcon } from '@heroicons/vue/24/solid';
import { useForm } from '@inertiajs/inertia-vue3';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import DangerButton from '@/Components/DangerButton.vue';
import Accordion from '@/Components/Accordion.vue';
import { reactive, ref } from 'vue';
import ConfirmationModal from '@/Components/ConfirmationModal.vue';
import { notify } from '../Utility/Notify';

const props = defineProps({
    vault: Object,
});

const encrypt = e => {
    const button = e.currentTarget;
    const state = button.parentNode.parentNode;
    const input = state.querySelector('.value input');
    const { value } = input.dataset;

    axios.post(route('vaults.datas.encrypt'), {
        value: value,
    }).then(response => {
        input.value = 'Value encrypted';
        state.dataset.state = 'decrypted';
    });
};

const decrypt = e => {
    const input = e.currentTarget;
    const state = input.parentNode.parentNode;
    const { value } = input.dataset;

    axios.post(route('vaults.datas.decrypt'), {
        value: value,
    }).then(response => {
        const { data } = response;

        input.value = data;
        state.dataset.state = 'encrypted';
    });
};

const fieldForm = useForm({
    dataId: Number,
    key: [],
    value: [],
});

const addField = (dataId) => {
    const [ key, value ] = [
        fieldForm.key[dataId],
        fieldForm.value[dataId],
    ];

    console.log(fieldForm.key, fieldForm.value);

    fieldForm.post(route('vaults.datas.groups.fields.create', {
        dataId: dataId,
        key: key,
        value: value,
    }), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => (fieldForm.reset()),
    });
};

const groupForm = useForm({
    vault: props.vault,
    name: '',
});

const addGroup = () => {
    groupForm.post(route('vaults.datas.groups.create'), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
            notify('success', `Created new group „${groupForm.name}“`);
            groupForm.reset('name');
        },
    });
};

const fieldBeingDeleted = ref(null);
const deleteFieldForm = useForm();

const confirmFieldDeletion = (dataId, key) => {
    fieldBeingDeleted.value = {
        dataId: dataId,
        key: key,
    };
};

const deleteField = () => {
    deleteFieldForm.delete(route('vaults.datas.groups.fields.destroy', {
        data: fieldBeingDeleted.value,
    }), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => (fieldBeingDeleted.value = null),
    });
};
</script>

<template>
    <InputLabel for="group-name" value="Group Name" />

    <TextInput
        v-model="groupForm.name"
        id="group-name"
        type="text"
        class="mt-1 block w-full"
    />

    <div class="flex justify-end mt-4 mb-4">
        <PrimaryButton @click="addGroup">
            Add group
        </PrimaryButton>
    </div>

    <hr class="my-8 block">

    <template v-for="data, index in vault.datas" :key="index">
        <div class="data mt-4 shadow-md border rounded-lg">
            <Accordion :vaultId="vault.id" :data="data">
                <template #head :class="p-3">
                    <input
                        type="text"
                        :value="data.group_name"
                        class="py-0 pl-0 font-bold w-max"
                        @click="$event.stopImmediatePropagation();"
                    />
                </template>

                <template #body>
                    <template v-for="row in JSON.parse(data.fields)" :key="row">
                        <template v-for="value, key in row" :key="key">
                            <div class="state flex mb-2" data-state="decrypted">
                                <div class="key flex">
                                    <input
                                        type="text"
                                        :value="key"
                                        class="key pl-0"
                                    />

                                    <span class="icon">
                                        =
                                    </span>
                                </div>

                                <div class="value">
                                    <input
                                        @click="decrypt"
                                        :data-value="value"
                                        type="text"
                                        value="Value encrypted"
                                    />
                                </div>

                                <div class="button">
                                    <SecondaryButton @click="encrypt" :data-value="value">
                                        <LockClosedIcon class="w-5 h-5 mr-2" />

                                        <span>
                                            Encrypt
                                        </span>
                                    </SecondaryButton>
                                </div>

                                <div class="close">
                                    <div
                                        @click="confirmFieldDeletion(data.id, key)"
                                        class="icon-hover"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </template>

                    <hr class="mt-2">

                    <form @submit.prevent="addField(data.id)">
                        <div class="flex mt-3">
                            <div class="key flex">
                                <input
                                    v-model="fieldForm.key[data.id]"
                                    type="text"
                                    class="key pl-0"
                                    placeholder="Key / Identifier"
                                />

                                <span class="icon">
                                    =
                                </span>
                            </div>

                            <div class="value flex">
                                <input
                                    v-model="fieldForm.value[data.id]"
                                    type="text"
                                    placeholder="Value"
                                />
                            </div>

                            <div class="flex justify-end w-full">
                                <SecondaryButton @click="addField(data.id)" class="my-5">
                                    Add field
                                </SecondaryButton>
                            </div>
                        </div>
                    </form>
                </template>
            </Accordion>
        </div>
    </template>

    <ConfirmationModal :show="fieldBeingDeleted != null" @close="fieldBeingDeleted = null">
        <template #title>
            Delete Field – „{{ fieldBeingDeleted.key }}“
        </template>

        <template #content>
            Are you sure you would like to delete this field?
        </template>

        <template #footer>
            <SecondaryButton @click="fieldBeingDeleted = null">
                Cancel
            </SecondaryButton>

            <DangerButton
                class="ml-3"
                :class="{ 'opacity-25': deleteFieldForm.processing }"
                :disabled="deleteFieldForm.processing"
                @click="deleteField"
            >
                Delete
            </DangerButton>
        </template>
    </ConfirmationModal>
</template>

<style lang="scss" scoped>
[data-state='decrypted'] {
    .value input {
        font-style: italic;
        cursor: pointer;
    }

    button {
        visibility: hidden;
    }
}

.data {
    input {
        box-shadow: none !important;
        border: none;
        font-size: 90%;

        &.key {
            font-weight: bold;
        }

        &.value {
            min-width: 260px;
        }
    }
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
}

.button,
.close {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    > div {
        cursor: pointer;
    }
}
</style>
