<script setup>
import { useForm } from '@inertiajs/inertia-vue3';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

defineProps({
    vault: Object ?? null,
});

const form = useForm({
    logo: [],
    name: '',
    url: '',
});

const createVault = () => {
    form.post(route('vaults.store'), {
        forceFormData: true,
        errorBag: 'createVault',
        preserveScroll: true,
    });
};
</script>

<template>
    <FormSection @submitted="createVault">
        <template #title>
            Vault Details
        </template>

        <template #description>
            Create a new vault to collaborate with others on credentials.
        </template>

        <template #form>
            <div class="col-span-6">
                <InputLabel value="Vault Owner" />

                <div class="flex items-center mt-2">
                    <img class="object-cover w-12 h-12 rounded-full" :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name">

                    <div class="ml-4 leading-tight">
                        <div>
                            {{ $page.props.user.name }}
                        </div>

                        <div class="text-sm text-gray-700">
                            {{ $page.props.user.email }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="logo" value="Vault Logo" />

                <input
                    @input="form.logo = $event.target.files"
                    type="file"
                    name="logo"
                    id="logo"
                    class="block w-full mt-1"
                />

                <img v-if="vault" :src="`/storage/${vault.logo}`" alt="{{ vault.logo }}" class="preview">

                <InputError :message="form.errors.logo" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="name" value="Vault Name" />

                <TextInput
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="block w-full mt-1"
                    :value="vault.name"
                    autofocus
                />
                <InputError :message="form.errors.name" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="url" value="Vault Url" />

                <TextInput
                    id="url"
                    v-model="form.url"
                    type="text"
                    class="block w-full mt-1"
                    :value="vault.url"
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

<style scoped>
img.preview {
    max-width: 90px;
    height: auto;
    display: block;
    margin-top: 1rem;
}
</style>
