<script setup>

const { t } = useI18n();

import AppMenuItem from './AppMenuItem';

const model = computed (() => {
    
    return [{ items: [
            { label: t('sideMenu.country'), icon: 'pi pi-fw pi-id-card', to: '/country' },
            { label: t('sideMenu.citys'), icon: 'pi pi-fw pi-id-card', to: '/citys'},
            { label: t('sideMenu.persons'), icon: 'pi pi-fw pi-id-card', to: '/persons' },
            { label: t('sideMenu.interest'), icon: 'pi pi-fw pi-id-card', to: '/interest' },
            { label: t('sideMenu.personInterest'), icon: 'pi pi-fw pi-check-square', to: '/personInterest' },
            { label: t('sideMenu.allActivity'), icon: 'pi pi-fw pi-check-square', to: '/allActivity' },
            { label: t('sideMenu.organizationLegal'), icon: 'pi pi-fw pi-check-square', to: '/organizationLegal' },
            { label: t('sideMenu.organizationClassification'), icon: 'pi pi-fw pi-check-square', to: '/organizationClassification' },
            { label: t('sideMenu.organization'), icon: 'pi pi-fw pi-check-square', to: '/organization' },
            { label: t('sideMenu.eventType'), icon: 'pi pi-fw pi-bookmark', to: '/eventType' },
            { label: t('sideMenu.eventSpecialty'), icon: 'pi pi-fw pi-mobile', to: '/eventSpecialty', class: 'rotated-icon' },
            { label: t('sideMenu.eventSeries'), icon: 'pi pi-fw pi-list', to: '/eventSeries' },
            { label: t('sideMenu.listedType'), icon: 'pi pi-fw pi-share-alt', to: '/listedType' },
            { label: t('sideMenu.events'), icon: 'pi pi-fw pi-tablet', to: '/events' },
            { label: t('sideMenu.itemInEvents'), icon: 'pi pi-fw pi-tablet', to: '/itemInEvents' },

            
            { label: t('sideMenu.accompEventType'), icon: 'pi pi-fw pi-exclamation-circle', to: '/accompEventType' },
            { label: t('sideMenu.organizationLegal'), icon: 'pi pi-fw pi-table', to: '/organizationLegal' },
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
