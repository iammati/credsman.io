<script setup>
defineProps({
    appNameExtended: String,
});
</script>

<template>
    <p>
        <span v-if="appNameExtended">
            {{ appNameExtended }} |
        </span>

        Credsman.io
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
