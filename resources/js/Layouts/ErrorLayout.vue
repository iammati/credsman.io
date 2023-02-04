<script setup>
import { Head, Link } from '@inertiajs/vue3';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';

defineProps({
    title: String,
    canLogin: Boolean,
    canRegister: Boolean,
});
</script>

<template>
    <Head :title="title" />

    <div>
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
                <main>
                    <slot />
                </main>
            </div>
        </div>
    </div>
</template>
