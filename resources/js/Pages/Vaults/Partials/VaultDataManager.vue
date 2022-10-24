<script setup>
import { ref } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { useForm, usePage } from '@inertiajs/inertia-vue3';
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
import { PlusIcon } from '@heroicons/vue/24/solid';

defineProps({
    vault: Object,
});

const vaultDataManager = () => {
    alert('XD');
};

const vaultDataManagerForm = useForm({
    logo: null,
    name: '',
    url: '',
});
</script>

<template>
    <div v-if="vault">
        <SectionBorder />

        <!-- Vault Data Manager -->
        <FormSection @submitted="vaultDataManager">
            <template #title>
                Vault Data Manager
            </template>

            <template #description>
                Here you can add vault-related data like credentials for a specific area of this vault.
            </template>

            <template #form>
                <div class="col-span-6 sm:col-span-4">
                    <template v-if="vault.datas?.length">
                        {{ vault.datas?.length }}
                    </template>

                    <template v-else>
                        <!-- <Link :href="route('vaults.data.add')"> -->
                            <PrimaryButton>
                                <PlusIcon class="h-4 w-4" />
                            </PrimaryButton>
                        <!-- </Link> -->
                    </template>
                </div>
            </template>

            <template #actions>
                <ActionMessage :on="vaultDataManagerForm.recentlySuccessful" class="mr-3">
                    Saved.
                </ActionMessage>

                <PrimaryButton :class="{ 'opacity-25': vaultDataManagerForm.processing }" :disabled="vaultDataManagerForm.processing">
                    Save
                </PrimaryButton>
            </template>
        </FormSection>
    </div>
</template>
