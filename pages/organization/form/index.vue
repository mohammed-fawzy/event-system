<template>
  <div>
    <component :is="dynamicComponent" @next="activeComponent = activeComponent === 'Component1' ? 'Component2' : 'Component3'"/>
  </div>
</template>

<script setup>

import Component1 from './AddNewOrganization.vue';
import Component2 from './SelectActivity.vue';
import Component3 from './OrganizationProfile.vue';

const activeComponent = ref('Component1'); // Initial active component

const dynamicComponent = computed(() => {
  switch (activeComponent.value) {
    case 'Component1':
      return Component1;
    case 'Component2':
      return Component2;
    case 'Component3':
      return Component3;
    default:
      return null; 
  }
});
</script>
