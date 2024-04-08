<template>
  <div class="card flex justify-center">
      <Dialog :visible="visible" modal header="Add New country"  @update:visible="closeModal" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <div class="flex flex-col gap-2">
          <label for="username">Name</label>
          <InputText id="username" v-model="value" aria-describedby="username-help" />
      </div>

      </Dialog>
  </div>
</template>

<script setup>
const emit = defineEmits(['close-modal']);
const closeModal = () => {
  console.log("closeModal");
  emit("closeModal");
};
defineProps({
  visible: {
    type: Boolean,
    default: false
  }
});


</script>
