<script setup>
import AppMenu from '../components/AppMenu.vue';

const logoUrl = computed(() => {
    // return `@/assets/images/logo-white.png`;
});
</script>

<template>
    <router-link to="/" class="layout-topbar-logo mt-6 block">
        <img src="@/assets/images/logo-white.png" alt="logo" class="mx-auto"/>
    </router-link>
    <app-menu></app-menu>
</template>

<style lang="scss" scoped></style>
