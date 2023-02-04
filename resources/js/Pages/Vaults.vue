<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import Vault from '@/Components/Vault.vue';
import { Link } from '@inertiajs/vue3';

defineProps({
    vaults: Array,
});
</script>

<template>
    <AppLayout title="Vaults">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Vaults
            </h2>
        </template>

        <div class="py-12 dark:bg-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl rounded-lg dark:bg-gray-800">
                    <div class="p-6 bg-white border-b border-gray-200 relative dark:bg-gray-800">
                        <div class="md:grid md:grid-cols-2 md:gap-6">
                            <template v-if="vaults.length > 0">
                                <div>
                                    <template v-for="vault, index in vaults" :key="vault">
                                        <Vault :vault="vault" :last="index === vaults.length" />
                                    </template>
                                </div>
                            </template>

                            <div v-else class="flex items-center">
                                <div class="flex gap-2 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>

                                    <p>
                                        You haven't create any Vault yet...
                                    </p>
                                </div>
                            </div>

                            <div class="text-end">
                                <Link :href="route('vaults.create')">
                                    <PrimaryButton>
                                        Create new vault
                                    </PrimaryButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
