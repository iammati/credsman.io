<script setup>
import { useForm, usePage, Link } from '@inertiajs/inertia-vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import VaultData from '@/Components/VaultData.vue';
import { notify } from '../../../Utility/Notify';

const props = defineProps({
    vault: Object,
});

const form = useForm({
    logo: null,
    name: '',
    url: '',
    datas: null,
});

const saveGroups = () => {
    console.log(props.vault.datas);
    notify('success', 'ah!!');
};
</script>

<template>
    <div v-if="vault">
        <SectionBorder />

        <!-- Vault Data Manager -->
        <FormSection @submitted="saveGroups">
            <template #title>
                Vault Data Manager
            </template>

            <template #description>
                Here you can add vault-related data like credentials for a specific area of this vault.
            </template>

            <template #form>
                <div class="col-span-6">
                    <VaultData :vault="vault" />
                </div>
            </template>

            <template #actions>
                <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                    Saved.
                </ActionMessage>

                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Save
                </PrimaryButton>
            </template>
        </FormSection>
    </div>
</template>
