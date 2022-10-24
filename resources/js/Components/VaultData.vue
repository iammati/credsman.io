<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';

defineProps({
    vault: Object,
});
</script>

<template>
    <div class="col-span-6 sm:col-span-4">
        <InputLabel for="group_name" value="Group Name" />

        <TextInput
            id="group_name"
            type="text"
            class="block w-full mt-1"
        />
    </div>

    <div class="col-span-6 sm:col-span-4 mt-4">
        <div class="columns-2">
            <div>
                <InputLabel for="key" value="Key" />

                <TextInput
                    id="key"
                    type="text"
                    class="block w-full mt-1"
                />
            </div>

            <div>
                <InputLabel for="value" value="Value" />

                <TextInput
                    id="value"
                    type="text"
                    class="block w-full mt-1"
                />
            </div>
        </div>
    </div>
</template>
