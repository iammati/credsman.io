<script setup>
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/inertia-vue3';

const props = defineProps({
    vault: Object,
});

const inputEvent = (target) => {
    console.log(props.vault.datas);

    const parent = target.parentNode.parentNode;

    const [ keyInput, valueInput ] = [
        parent.querySelector('#key-new'),
        parent.querySelector('#value-new'),
    ];

    console.log(keyInput.value, valueInput.value);
};
</script>

<template>
    <template v-for="data, index in vault.datas" :key="data">
        <div class="flex flex-wrap">
            <InputLabel :for="`group-name-${vault.id}`" value="Group Name" />

            <TextInput
                :id="`group-name-${vault.id}`"
                type="text"
                class="block w-full mt-1"
                :value="data.group_name"
            />
        </div>

        <div v-for="value, key in JSON.parse(data.fields)" :key="value">
            <div class="columns-2 mt-4">
                <div>
                    <InputLabel :for="`key-${index}`" value="Key" />

                    <TextInput
                        :id="`key-${index}`"
                        type="text"
                        class="block w-full mt-1"
                        @input="inputEvent($event.target)"
                        :value="key"
                    />
                </div>

                <div>
                    <InputLabel :for="`value-${index}`" value="Value" />

                    <TextInput
                        :id="`value-${index}`"
                        type="password"
                        class="block w-full mt-1"
                        @input="inputEvent($event.target)"
                        :value="value"
                    />
                </div>
            </div>
        </div>
    </template>

    <div class="columns-2 mt-4">
        <div>
            <InputLabel for="key-new" value="Key" />

            <TextInput
                id="key-new"
                type="text"
                class="block w-full mt-1"
                @input="inputEvent($event.target)"
            />
        </div>

        <div>
            <InputLabel for="value-new" value="Value" />

            <TextInput
                id="value-new"
                type="text"
                class="block w-full mt-1"
                @input="inputEvent($event.target)"
            />
        </div>
    </div>
</template>
