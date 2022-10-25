<script setup>
import ErrorLayout from '@/Layouts/ErrorLayout.vue';
import { computed } from 'vue';

const props = defineProps({
    status: Number,
    canLogin: Boolean,
    canRegister: Boolean,
    appVersion: String,
    laravelVersion: String,
    phpVersion: String,
    appNameExtended: String,
});

const title = function () {
    return {
        503: '503 Service Unavailable',
        500: '500 Server Error',
        404: '404 Page Not Found',
        403: '403 Forbidden',
    }[props.status]
};

const description = () => {
    return {
        503: 'Sorry, we are doing some maintenance. Please check back soon.',
        500: 'Whoops, something went wrong on our servers.',
        404: 'Sorry, the page you are looking for could not be found.',
        403: 'Sorry, you are forbidden from accessing this page.',
    }[props.status]
};
</script>

<template>
    <ErrorLayout :title="'Welcome'" :canLogin="canLogin" :canRegister="canRegister">
        <div class="flex justify-center pt-8 sm:justify-start sm:pt-0">
            <p style="font-family: Playfair Display; font-weight: bold; color: #F0706A; font-size: 40px;">
                {{ title() }}
            </p>
        </div>

        <div class="mt-4 text-center text-sm text-gray-500">
            {{ description() }}
        </div>
    </ErrorLayout>
</template>
