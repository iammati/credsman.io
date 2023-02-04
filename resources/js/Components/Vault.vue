<script setup>
import { Link } from '@inertiajs/vue3';
import { defaultLogo } from '../Utility/DefaultLogo';
import { EyeIcon, PencilIcon } from '@heroicons/vue/24/solid';
import PrimaryButton from './PrimaryButton.vue';
import SecondaryButton from './SecondaryButton.vue';

const props = defineProps({
    vault: Object,
    last: Boolean,
});
</script>

<template>
    <div class="item flex w-full rounded-lg shadow-lg border p-4 gap-4">
        <div class="flex items-center" style="min-width: 50px;">
            <img
                :src="vault.logo ? `/storage/${vault.logo}` : defaultLogo(props)"
                :alt="vault.logo ? vault.logo : 'Vault Logo'"
                class="object-cover rounded-full"
                style="width: 70px;"
            >
        </div>

        <div class="flex items-center w-full">
            <div>
                <p>
                    {{ vault.name }}
                </p>

                <p class="text-gray-400 hover:underline">
                    <a :href="vault.url" target="_blank">
                        {{ vault.url }}
                    </a>
                </p>
            </div>
        </div>

        <div class="flex items-center w-full justify-end" style="gap: 8px;">
            <Link :href="route('vaults.edit', { vault: vault })">
                <SecondaryButton class="px-2">
                    <PencilIcon class="w-5 h-5" />
                </SecondaryButton>
            </Link>

            <Link :href="route('vaults.show', { vault: vault })">
                <PrimaryButton class="px-2">
                    <EyeIcon class="w-5 h-5" />
                </PrimaryButton>
            </Link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
svg,
img {
    height: auto;

    path {
        fill: #1D9BF0;
    }
}

.item:not(:last-child) {
    margin-bottom: 1rem;
}
</style>
