
<template>
  <div class="mb-10" :class="'active-' + items[active].label.split(/\s/).join('').toLowerCase()">
    <p class="font-medium text-blue10 text-xl capitalize">{{ $t('form.events') }}</p>
    <div class="flex justify-start items-center mb-9 mt-1 text-sm font-medium">
    <div class="text-grey3"> {{ $t('common.addNew') }} </div>
    <span class="mx-1"> > </span> 
    <div class="font-medium text-grey3" :class=" active === 0 ? 'text-primary' : ''"> {{ $t('form.eventForm') }} </div>
    <span class="mx-1"> > </span> 
    <div class="font-medium text-grey3" :class=" active === 1 ? 'text-primary' : ''" v-if="active === 1"> {{ $t('common.register') }} </div>
  </div>
    <Steps v-model:activeStep="active" :model="items" />
    <div class="mt-10" >
      <component :is="active === 0 ? EventForm : active === 1 ? RegisterASubscription : BookYourSeat" @next="active++"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import EventForm from './EventForm.vue';
import RegisterASubscription from './RegisterASubscription.vue';
import BookYourSeat from './BookYourSeat.vue';
const active = ref(0);

const items = ref([
  {
    label: 'Event Form',
    
  },
  {
    label: 'Register a subscription'
  },
  {
    label: 'Book Your Seat'
  }
]);
</script>
