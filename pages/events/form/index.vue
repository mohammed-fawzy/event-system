<template>
  <div>
    <component :is="dynamicComponent" @next="activeComponent = activeComponent === 'Component1' ? 'Component2' : 'Component3'"/>

    <!-- <div class="flex justify-end mb-10">
      <Button class="bg-bgcancel text-primary h-48 font-normal text-2xl mt-4 mr-6">{{ $t('common.cancel') }}</Button>
      <Button class="bg-primary h-48 font-normal text-2xl mt-4">{{ $t('common.next') }}</Button>
    </div> -->
  </div>
</template>

<script setup>

import Component1 from './EventForm.vue';
import Component2 from './RegisterASubscription.vue';
import Component3 from './BookYourSeat.vue';

// Define a reactive variable to track the active component
const activeComponent = ref('Component1'); // Initial active component

// Computed property to determine the active component based on the activeComponent value
const dynamicComponent = computed(() => {
  switch (activeComponent.value) {
    case 'Component1':
      return Component1;
    case 'Component2':
      return Component2;
    case 'Component3':
      return Component3;
    default:
      return null; // Default component if activeComponent doesn't match any case
  }
});
</script>
