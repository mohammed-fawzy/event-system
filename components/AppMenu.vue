<script setup>
import { useI18n } from '#imports'

const { t } = useI18n();

import AppMenuItem from '../components/AppMenuItem';

const model = computed (() => {
    
    return [{ items: [
            { label: t('sideMenu.country'), icon: 'pi pi-fw pi-id-card', to: 'country' },
            { label: t('sideMenu.allActivity'), icon: 'pi pi-fw pi-check-square', to: '' },
            { label: t('sideMenu.eventType'), icon: 'pi pi-fw pi-bookmark', to: '' },
            { label: t('sideMenu.accompEventType'), icon: 'pi pi-fw pi-exclamation-circle', to: '' },
            { label: t('sideMenu.eventSpecialty'), icon: 'pi pi-fw pi-mobile', to: '', class: 'rotated-icon' },
            { label: t('sideMenu.organizationLegal'), icon: 'pi pi-fw pi-table', to: '' },
            { label: t('sideMenu.eventSeries'), icon: 'pi pi-fw pi-list', to: '' },
            { label: t('sideMenu.listedType'), icon: 'pi pi-fw pi-share-alt', to: '' },
            { label: t('sideMenu.events'), icon: 'pi pi-fw pi-tablet', to: '' },
            { label: t('sideMenu.accomopEvent'), icon: 'pi pi-fw pi-clone', to: '' },
            { label: t('sideMenu.eventBoothType'), icon: 'pi pi-fw pi-image', to: '' },
            { label: t('sideMenu.eventSpace'), icon: 'pi pi-fw pi-bars', to: '', preventExact: true },
            { label: t('sideMenu.storage'), icon: 'pi pi-fw pi-comment', to: '' },
            { label: t('sideMenu.requests'), icon: 'pi pi-fw pi-file', to: '' },
        ]
    }]

    });
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
