<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import CreateVaultForm from '@/Pages/Vaults/Partials/CreateVaultForm.vue';
import VaultDataManager from '@/Pages/Vaults/Partials/VaultDataManager.vue';
import DeleteVaultForm from '@/Pages/Vaults/Partials/DeleteVaultForm.vue';

defineProps({
    vault: Object,
});
</script>

<template>
    <AppLayout :title="vault ? `Editing „${vault.name}“` : 'Create Vault'">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                <template v-if="vault">
                    Edit Vault – „{{ vault.name }}“
                </template>

                <template v-else>
                    Create Vault
                </template>
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <CreateVaultForm :vault="vault" />

                <VaultDataManager :vault="vault" class="mt-10 sm:mt-0" :readOnly="false" />

                <DeleteVaultForm :vault="vault" class="mt-10 sm:mt-0" />
            </div>
        </div>
    </AppLayout>
</template>
