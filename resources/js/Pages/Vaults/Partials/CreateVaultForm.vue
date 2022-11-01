<script setup>
import { useForm } from '@inertiajs/inertia-vue3';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { defaultLogo } from '../../../Utility/DefaultLogo';
import { notify } from '../../../Utility/Notify';

const props = defineProps({
    vault: Object,
});

const form = useForm({
    logo: props.vault?.logo,
    name: props.vault?.name,
    url: props.vault?.url,
});

const submitted = () => {
    let action = 'store';
    if (props.vault) {
        action = 'update';
    }

    form.post(route(`vaults.${action}`, { vault: props.vault }), {
        forceFormData: true,
        errorBag: `${action}Vault`,
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
            if (action === 'update') {
                notify('success', 'Vault updated', 'This vault has been successfully updated!');
            }
        }
    });
};

const logoInputEvent = e => {
    form.logo = e.target.files[0];
};
</script>

<template>
    <FormSection @submitted="submitted">
        <template #title>
            Vault Details
        </template>

        <template #description>
            Create a new vault to collaborate with others on credentials.
        </template>

        <template #form>
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="logo" value="Vault Logo" />

                <template v-if="vault">
                    <img
                        :src="vault.logo ? `/storage/${vault.logo}` : defaultLogo(props)"
                        :alt="vault.logo ? `${vault.logo}` : 'Vault Logo'"
                        id="preview"
                        class="object-cover rounded-full mt-2"
                    >
                </template>

                <div id="logo-wrapper">
                    <label for="logo" id="logo-label" class="mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"></path>
                        </svg>

                        <p class="mt-5" style="font-size: 1rem;">
                            <span class="underline font-bold text-gray-800">Click to upload</span>

                            <span class="text-gray-600">
                                or drag and drop
                            </span>
                        </p>

                        <p class="mt-1 text-gray-600" style="font-size: 14px;">
                            Maximum file size is 5 MB.
                        </p>
                    </label>

                    <div v-if="form.progress" class="mt-5 w-full bg-gray-200 rounded-full">
                        <div
                            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                            :width="form.progress.percentage"
                        >
                            {{ form.progress.percentage }}%
                        </div>
                    </div>

                    <input
                        @input="logoInputEvent($event)"
                        type="file"
                        name="logo"
                        id="logo"
                        class="w-full mt-1"
                    />
                </div>

                <InputError :message="form.errors.logo" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="name" value="Vault Name" />

                <TextInput
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="block w-full mt-1"
                    autofocus
                />
                <InputError :message="form.errors.name" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="url" value="Vault Url" />

                <TextInput
                    id="url"
                    v-model="form.url"
                    type="url"
                    class="block w-full mt-1"
                />
                <InputError :message="form.errors.url" class="mt-2" />
            </div>
        </template>

        <template #actions>
            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                <template v-if="vault">
                    Update
                </template>

                <template v-else>
                    Create
                </template>
            </PrimaryButton>
        </template>
    </FormSection>
</template>

<style lang="scss" scoped>
#logo-wrapper {
    position: relative;

    label#logo-label {
        width: 100%;
        border: 2px dashed #1f2937;
        border-radius: 1.25rem;
        padding: 1.25rem;
        text-align: center;
        display: block;

        svg {
            width: 30px;
            margin-inline: auto;

            path {
                fill: #1f2937;
            }
        }
    }

    input {
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        height: 100%;
        opacity: 0;
    }
}

img#preview {
    max-width: 90px;
    height: auto;
    display: block;
    margin-bottom: 1rem;
}
</style>
