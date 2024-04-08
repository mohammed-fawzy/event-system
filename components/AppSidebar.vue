<script setup>
import AppMenu from '../components/AppMenu.vue';

</script>

<template>
    <router-link to="/" class="layout-topbar-logo mt-6 mb-4 block">
        <img src="@/assets/images/logo-white.png" alt="logo" class="mx-auto"/>
    </router-link>
    <app-menu></app-menu>
</template>

<style lang="scss" scoped></style>
