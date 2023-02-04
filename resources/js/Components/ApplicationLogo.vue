<script setup>
import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';

const appNameExtended = computed(() => usePage().props.appNameExtended);
const productName = computed(() => usePage().props.productName);
</script>

<template>
    <p>
        <span v-if="appNameExtended">
            {{ appNameExtended }} |
        </span>

        {{ productName ?? 'XD' }}
    </p>
</template>

<style scoped>
p {
    font-family: Playfair Display;
    margin-bottom: 0;
    font-weight: bold;
    font-size: 22px;
}
</style>
