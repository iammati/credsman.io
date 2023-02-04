<script setup>
import { Link, usePage } from '@inertiajs/vue3';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
</script>

<template>
    <Link :href="'/dashboard'">
        <ApplicationLogo style="font-size: 30px;" />
    </Link>
</template>
