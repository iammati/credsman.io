<script setup>
import { useForm, usePage, Link } from '@inertiajs/vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import VaultData from '@/Components/VaultData.vue';
import { notify } from '../../../Utility/Notify';

const props = defineProps({
    vault: Object,
    readOnly: Boolean,
});

const form = useForm({
    logo: null,
    name: '',
    url: '',
    datas: null,
});

const saveGroups = () => {
    form.processing = true;

    const payload = [];
    const { datas } = props.vault;

    const nodes = document.querySelectorAll('#data-blocks > .data[data-id]');
    for (const node of nodes) {
        const fields = {};

        for (const fieldNode of node.querySelectorAll('.field')) {
            fields[fieldNode.querySelector('.key input').value] = fieldNode.dataset.value;
        }

        payload.push({
            id: node.dataset.id,
            group_name: node.querySelector('.group-name').value,
            fields: JSON.stringify(fields),
        });
    }

    axios.post(route('vaults.datas.update'), {
        datas: payload,
    }).then(() => {
        form.processing = false;
        notify('success', 'Vault Data Manager – saved.');
    }).catch(error => {
        form.processing = false;
        form.error = error.response.data;
        notify('error', 'Vault Data Manager – failed!', 'An error occurred while saving this vault\'s data!');
    });
};
</script>

<template>
    <div v-if="readOnly">
        <VaultData :vault="vault" :readOnly="readOnly" />
    </div>

    <div v-else-if="vault">
        <SectionBorder />

        <!-- Vault Data Manager -->
        <FormSection>
            <template #title>
                Vault Data Manager
            </template>

            <template #description>
                Here you can add vault-related data like credentials for a specific area of this vault.
            </template>

            <template #form>
                <div class="col-span-6">
                    <VaultData :vault="vault" :readOnly="readOnly" />
                </div>
            </template>

            <template #actions>
                <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                    Saved.
                </ActionMessage>

                <PrimaryButton
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    @click="saveGroups"
                >
                    Save
                </PrimaryButton>
            </template>
        </FormSection>
    </div>
</template>
