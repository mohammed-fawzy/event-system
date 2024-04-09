<script setup>
import AppMenu from '../components/AppMenu.vue';

</script>

<template>
    <NuxtLink to="/" class="layout-topbar-logo mt-6 mb-4 block">
        <img src="@/assets/images/logo-white.png" alt="logo" class="mx-auto"/>
    </NuxtLink>
    <app-menu></app-menu>
</template>

<style lang="scss" scoped></style>
