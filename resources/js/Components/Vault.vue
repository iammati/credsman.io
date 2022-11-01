<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import { defaultLogo } from '../Utility/DefaultLogo';

const props = defineProps({
    vault: Object,
    last: Boolean,
});
</script>

<template>
    <Link :href="route('vaults.show', { vault: vault })" class="mb-4 block">
        <div class="item hover:bg-gray-50 flex w-full rounded-3xl shadow-lg border p-4 gap-4">
            <div class="flex items-center">
                <img
                    :src="vault.logo ? `/storage/${vault.logo}` : defaultLogo(props)"
                    :alt="vault.logo ? vault.logo : 'Vault Logo'"
                    class="object-cover rounded-full"
                >
            </div>

            <div class="flex items-center">
                <div>
                    <p>
                        {{ vault.url }}
                    </p>

                    <p class="text-gray-400">
                        {{ vault.name }}
                    </p>
                </div>
            </div>
        </div>
    </Link>
</template>

<style lang="scss" scoped>
svg,
img {
    width: 70px;
    height: auto;

    path {
        fill: #1D9BF0;
    }
}

.item {
    cursor: pointer;
}

.item:not(:last-child) {
    margin-bottom: 1rem;
}
</style>
