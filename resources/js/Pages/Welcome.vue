<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';

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
    <Head title="Welcome" />

    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div v-if="canLogin" class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            <Link v-if="$page.props.user" :href="route('dashboard')">
                <PrimaryButton>
                    Dashboard
                </PrimaryButton>
            </Link>

            <template v-else>
                <Link :href="route('login')">
                    <PrimaryButton class="mr-3">
                        Log in
                    </PrimaryButton>
                </Link>

                <Link v-if="canRegister" :href="route('register')">
                    <SecondaryButton>
                        Register
                    </SecondaryButton>
                </Link>
            </template>
        </div>

        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div class="flex justify-center pt-8 sm:justify-start sm:pt-0">
                <ApplicationLogo style="color: #F0706A; font-size: 40px;" :appNameExtended="appNameExtended" />
            </div>

            <div class="mt-4 text-end text-sm text-gray-500 sm:text-right sm:ml-0">
                Credsman.io v{{ appVersion }}
            </div>
        </div>
    </div>
</template>
