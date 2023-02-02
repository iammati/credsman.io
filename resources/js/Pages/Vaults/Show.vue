<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { defaultLogo } from '../../Utility/DefaultLogo';
import VaultDataManager from './Partials/VaultDataManager.vue';

const props = defineProps({
    vault: Object,
});
</script>

<template>
    <AppLayout :title="vault.name">
        <div>
            <div class="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 bg-white shadow sm:rounded-md mt-4">
                <div class="flex mb-8 justify-center" style="gap: 8px; align-items: center;">
                    <img
                        :src="vault.logo ? `/storage/${vault.logo}` : defaultLogo(props)"
                        :alt="vault.logo ? `${vault.logo}` : 'Vault Logo'"
                        id="preview"
                        class="object-cover rounded-full"
                    >

                    <div class="text">
                        <p class="mb-0" style="font-size: 18px; font-weight: bold;">
                            {{ vault.name }}
                        </p>

                        <p class="text-gray-400 text-center hover:underline">
                            <a :href="vault.url" target="_blank">
                                {{ vault.url }}
                            </a>
                        </p>
                    </div>
                </div>

                <VaultDataManager :vault="vault" :readOnly="true" class="mt-5" />
            </div>
        </div>
    </AppLayout>
</template>
