<script setup>
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import { LockClosedIcon } from '@heroicons/vue/24/solid';
import { router, useForm } from '@inertiajs/vue3';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import DangerButton from '@/Components/DangerButton.vue';
import Accordion from '@/Components/Accordion.vue';
import { reactive, ref } from 'vue';
import ConfirmationModal from '@/Components/ConfirmationModal.vue';
import { notify } from '../Utility/Notify';

const props = defineProps({
    vault: Object,
    readOnly: Boolean,
});

const encrypt = e => {
    const button = e.currentTarget;
    const state = button.parentNode.parentNode;
    const input = state.querySelector('.value input');
    const value = input.value;

    axios.post(route('vaults.datas.encrypt'), {
        value: value,
    }).then(response => {
        const { data } = response;

        input.value = 'Value encrypted';
        state.dataset.state = 'decrypted';
        state.dataset.value = data;
    });
};

const decrypt = e => {
    const input = e.currentTarget;
    const state = input.parentNode.parentNode;
    const value = state.dataset.value;

    if (state.dataset.state === 'encrypted') {
        return false;
    }

    axios.post(route('vaults.datas.decrypt'), {
        value: value,
    }).then(response => {
        const { data } = response;

        input.value = data;
        state.dataset.state = 'encrypted';
        state.dataset.value = data;
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

    fieldForm.key = key;
    fieldForm.value = value;
    fieldForm.dataId = dataId;

    fieldForm.post(route('vaults.datas.groups.fields.create'), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => (fieldForm.reset() && console.log(fieldForm)),
    });
};

const groupForm = useForm({
    vault: props.vault,
    name: '',
});

const addGroup = () => {
    if (groupForm.name.length === 0) {
        return notify('error', 'Group name cannot be empty!');
    }

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
// const deleteFieldForm = useForm();

const confirmFieldDeletion = (dataId, key) => {
    fieldBeingDeleted.value = {
        dataId: dataId,
        key: key,
    };
};

const deleteField = () => {
    router.delete(route('vaults.datas.groups.fields.destroy', {
        data: fieldBeingDeleted.value,
    }), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => (fieldBeingDeleted.value = null),
    });
};

const copy2Clipboard = async (text, decrypt = false) => {
    if (decrypt) {
        notify('info', `Requested to decrypt...`);

        return await axios.post(route('vaults.datas.decrypt'), {
            value: text,
        }).then(async response => {
            const { data } = response;

            await navigator.clipboard.writeText(data);

            return notify('success', `Saved decrypted value into clipboard`);
        });
    }

    await navigator.clipboard.writeText(text);

    notify('info', `Copied <i>${text}</i> to clipboard`);
};
</script>

<template>
    <InputLabel v-if="!readOnly" for="group-name" value="Group Name" />

    <TextInput
        v-if="!readOnly"
        v-model="groupForm.name"
        id="group-name"
        type="text"
        class="mt-1 block w-full"
    />

    <div v-if="!readOnly" class="flex justify-end mt-4 mb-4">
        <PrimaryButton @click="addGroup">
            Add group
        </PrimaryButton>
    </div>

    <hr v-if="!readOnly" class="my-8 block">

    <div id="data-blocks">
        <template v-for="data, index in vault.datas" :key="index">
            <div class="data mt-4 shadow-md border rounded-lg" :data-id="data.id">
                <Accordion :vaultId="vault.id" :data="data" :readOnly="readOnly">
                    <template #head :class="p-3">
                        <input
                            v-if="!readOnly"
                            type="text"
                            :value="data.group_name"
                            class="group-name py-0 pl-0 font-bold w-max"
                            @click="$event.stopImmediatePropagation();"
                        />

                        <p v-else>
                            <b>{{ data.group_name }}</b>
                        </p>
                    </template>

                    <template #body>
                        <template v-for="value, key in JSON.parse(data.fields)" :key="key">
                            <div class="field state flex mb-2" data-state="decrypted" :data-value="value">
                                <template v-if="readOnly">
                                    <div class="grid grid-cols-2 gap-4 readonly flex items-center" style="gap: 8px;">
                                        <p @click="copy2Clipboard(key)" class="cursor-pointer">
                                            {{ key }}
                                        </p>

                                        <a class="block" @click="copy2Clipboard(value, true)">
                                            <input
                                                type="password"
                                                :value="value"
                                                class="p-0 cursor-pointer"
                                                disabled
                                            />
                                        </a>
                                    </div>
                                </template>

                                <template v-else>
                                    <div class="key flex">
                                        <input
                                            type="text"
                                            v-bind:value="key"
                                            class="key pl-0"
                                        />

                                        <span class="icon">
                                            =
                                        </span>
                                    </div>

                                    <div class="value">
                                        <input
                                            @click="decrypt"
                                            type="text"
                                            value="Value encrypted"
                                        />
                                    </div>

                                    <div class="button">
                                        <SecondaryButton @click="encrypt">
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
                                </template>
                            </div>
                        </template>

                        <hr class="mt-2">

                        <form @submit.prevent="addField(data.id)">
                            <div v-if="!readOnly" class="flex mt-3">
                                <div class="key flex">
                                    <input
                                        v-model="fieldForm.key[data.id]"
                                        type="text"
                                        class="key pl-0"
                                        placeholder="Label"
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

                                <div v-if="!readOnly" class="flex justify-end w-full">
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
    </div>

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

.field.state > div {
    > p,
    > a {
        border: 2px solid transparent;
        border-radius: 5px;

        &:hover {
            border-color: #000;
        }
    }
}
</style>
