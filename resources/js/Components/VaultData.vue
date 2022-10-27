<script setup>
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import { LockClosedIcon, PlusCircleIcon, XMarkIcon } from '@heroicons/vue/24/solid';
import { useForm } from '@inertiajs/inertia-vue3';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import Accordion from '@/Components/Accordion.vue';

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
        const { data } = response;

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

const addField = e => {

};
</script>

<template>
    <template v-for="data in vault.datas" :key="data">
        <div class="data">
            <Accordion>
                <template #head>
                    <span class="font-bold">
                        {{ data.group_name }}
                    </span>
                </template>

                <template #body>
                    <template v-for="row in JSON.parse(data.fields)" :key="row">
                        <template v-for="value, key in row" :key="key">
                            <div class="state flex mt-2" data-state="decrypted">
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
                                    <XMarkIcon class="w-5" />
                                </div>
                            </div>
                        </template>

                        <div class="flex mt-3">
                            <div class="key flex">
                                <input
                                    id="key"
                                    type="text"
                                    class="key pl-0"
                                    placeholder="Key / Identifier"
                                />

                                <span class="icon">
                                    =
                                </span>
                            </div>

                            <div class="value">
                                <input
                                    id="value"
                                    type="text"
                                    placeholder="Value"
                                />
                            </div>
                        </div>

                        <SecondaryButton
                            @click="addField"
                            class="mb-3"
                        >
                            Add field
                        </SecondaryButton>
                    </template>
                </template>
            </Accordion>
        </div>

        <InputLabel for="group-name" value="Group Name" class="mt-7" />

        <TextInput
            id="group-name"
            type="text"
            class="mt-1 block w-full"
        />

        <PrimaryButton class="mt-4">
            Add group
        </PrimaryButton>
    </template>
</template>

<style lang="scss" scoped>
[data-state='decrypted'] {
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

        &.decrypted {
            font-style: italic;
            cursor: pointer;
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
}
</style>
