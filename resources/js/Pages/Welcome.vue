<script setup>
import { Head } from '@inertiajs/inertia-vue3';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import ErrorLayout from '@/Layouts/ErrorLayout.vue';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    appVersion: String,
    laravelVersion: String,
    phpVersion: String,
    appNameExtended: String,
});
</script>

<template>
    <ErrorLayout :title="'Welcome'" :canLogin="canLogin" :canRegister="canRegister">
        <div class="flex justify-center pt-8 sm:justify-start sm:pt-0">
            <ApplicationLogo style="color: #F0706A; font-size: 40px;" :appNameExtended="appNameExtended" />
        </div>

        <div class="text-end text-sm text-gray-500 sm:text-right sm:ml-0">
            Credsman.io v{{ appVersion }}
        </div>
    </ErrorLayout>
</template>
