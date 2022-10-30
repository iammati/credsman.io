<script setup>
import { Link } from '@inertiajs/inertia-vue3';

defineProps({
    vault: Object,
    last: Boolean,
});
</script>

<template>
    <Link :href="route('vaults.show', { vault: vault })">
        <div class="item flex w-full rounded-3xl shadow-lg border p-6 gap-4">
            <div class="flex items-center">
                <img :src="`/storage/${vault.logo}`" alt="{{ vault.logo }}">
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

/* #1D9BF0 */
</style>
