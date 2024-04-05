<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

import AppMenuItem from '../components/AppMenuItem';

const model = ref([
    
    {
        items: [
            { label: t('sideMenu.country'), icon: 'pi pi-fw pi-id-card', to: '/uikit/formlayout' },
            { label: t('sideMenu.allActivity'), icon: 'pi pi-fw pi-check-square', to: '/uikit/input' },
            { label: t('sideMenu.eventType'), icon: 'pi pi-fw pi-bookmark', to: '/uikit/floatlabel' },
            { label: t('sideMenu.accompEventType'), icon: 'pi pi-fw pi-exclamation-circle', to: '/uikit/invalidstate' },
            { label: t('sideMenu.eventSpecialty'), icon: 'pi pi-fw pi-mobile', to: '/uikit/button', class: 'rotated-icon' },
            { label: t('sideMenu.organizationLegal'), icon: 'pi pi-fw pi-table', to: '/uikit/table' },
            { label: t('sideMenu.eventSeries'), icon: 'pi pi-fw pi-list', to: '/uikit/list' },
            { label: t('sideMenu.listedType'), icon: 'pi pi-fw pi-share-alt', to: '/uikit/tree' },
            { label: t('sideMenu.events'), icon: 'pi pi-fw pi-tablet', to: '/uikit/panel' },
            { label: t('sideMenu.accomopEvent'), icon: 'pi pi-fw pi-clone', to: '/uikit/overlay' },
            { label: t('sideMenu.eventBoothType'), icon: 'pi pi-fw pi-image', to: '/uikit/media' },
            { label: t('sideMenu.eventSpace'), icon: 'pi pi-fw pi-bars', to: '/uikit/menu', preventExact: true },
            { label: t('sideMenu.storage'), icon: 'pi pi-fw pi-comment', to: '/uikit/message' },
            { label: t('sideMenu.requests'), icon: 'pi pi-fw pi-file', to: '/uikit/file' },
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
