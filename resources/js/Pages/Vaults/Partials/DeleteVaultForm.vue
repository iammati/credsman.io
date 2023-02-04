<script setup>
import { ref } from 'vue';
import { router, useForm } from '@inertiajs/vue3';
import ActionSection from '@/Components/ActionSection.vue';
import ConfirmationModal from '@/Components/ConfirmationModal.vue';
import DangerButton from '@/Components/DangerButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import SectionBorder from '@/Components/SectionBorder.vue';

const props = defineProps({
    vault: Object,
});

const confirmingVaultDeletion = ref(false);
// const form = useForm();

const confirmVaultDeletion = () => {
    confirmingVaultDeletion.value = true;
};

const deleteVault = () => {
    router.delete(route('vaults.destroy', props.vault), {
        errorBag: 'deleteVault',
    });
};
</script>

<template>
    <div v-if="vault">
        <SectionBorder />

        <ActionSection>
            <template #title>
                Delete Vault – „{{ vault.name }}“
            </template>

            <template #description>
                Permanently delete this vault.
            </template>

            <template #content>
                <div class="max-w-xl text-sm text-gray-600">
                    Once a vault is deleted, all of its resources and data will be permanently deleted. Before deleting this vault, please download any data or information regarding this vault that you wish to retain.
                </div>

                <div class="mt-5">
                    <DangerButton @click="confirmVaultDeletion">
                        Delete Vault
                    </DangerButton>
                </div>

                <!-- Delete Vault Confirmation Modal -->
                <ConfirmationModal :show="confirmingVaultDeletion" @close="confirmingVaultDeletion = false">
                    <template #title>
                        Delete Vault
                    </template>

                    <template #content>
                        Are you sure you want to delete this vault? Once a vault is deleted, all of its resources and data will be permanently deleted.
                    </template>

                    <template #footer>
                        <SecondaryButton @click="confirmingVaultDeletion = false">
                            Cancel
                        </SecondaryButton>

                        <DangerButton
                            class="ml-3"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                            @click="deleteVault"
                        >
                            Delete Vault
                        </DangerButton>
                    </template>
                </ConfirmationModal>
            </template>
        </ActionSection>
    </div>
</template>
