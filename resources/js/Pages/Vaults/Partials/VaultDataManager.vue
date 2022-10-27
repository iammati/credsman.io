<script setup>
import { onMounted, ref } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { useForm, usePage, Link } from '@inertiajs/inertia-vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import ActionSection from '@/Components/ActionSection.vue';
import ConfirmationModal from '@/Components/ConfirmationModal.vue';
import DangerButton from '@/Components/DangerButton.vue';
import DialogModal from '@/Components/DialogModal.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import TextInput from '@/Components/TextInput.vue';
import VaultData from '@/Components/VaultData.vue';
import { PlusIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    vault: Object,
});

const form = useForm({
    logo: null,
    name: '',
    url: '',
});

const submitted = () => {
    // ...
};
</script>

<template>
    <div v-if="vault">
        <SectionBorder />

        <!-- Vault Data Manager -->
        <FormSection @submitted="submitted">
            <template #title>
                Vault Data Manager
            </template>

            <template #description>
                Here you can add vault-related data like credentials for a specific area of this vault.
            </template>

            <template #form>
                <div class="col-span-6">
                    <VaultData :vault="vault" />
                </div>
            </template>

            <template #actions>
                <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                    Saved.
                </ActionMessage>

                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Save
                </PrimaryButton>
            </template>
        </FormSection>
    </div>
</template>
