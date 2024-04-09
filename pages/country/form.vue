<template>
  <div class="card flex justify-center">
      <Dialog :visible="visible" modal header="Add New country"  @update:visible="closeModal" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
          <Form @submit="onSubmit" v-slot:default="{ errors }">
            <div class="flex flex-col mb-8">
              <label for="name" class="text-xl font-medium text-label mb-4">Name</label>
              <Field as="InputText" name="name" placeholder="Enter Name" />
            </div>
            <div class="flex justify-between mb-8 gap-9">
              <div class="flex flex-col basis-2/4"> 
                <label for="Initials" class="text-xl font-medium text-label mb-4">Initials</label>
                <Field as="InputText" name="Initials" placeholder="Enter Initials" rules="required" v-model="theData.initials" :invalid="errors.Initials"/>
                <ErrorMessage name="Initials" class="text-red-500 mt-2"/>
              </div>

              <div class="flex flex-col basis-2/4">
                <label for="Flag" class="text-xl font-medium text-label mb-4">Flag</label>
                <Field as="Dropdown" v-model="theData.flag" name="Flag" :options="cities" optionLabel="name" placeholder="Select" rules="required" :invalid="errors.Flag"/>
                <ErrorMessage name="Flag" class="text-red-500 mt-2"/>
              </div>
            </div>
            <div class="flex flex-col mb-8">
              <label for="Nationality" class="text-xl font-medium text-label mb-4">Nationality</label>
              <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select"/>
            </div>
            <div class="flex justify-center">
              <Button type="submit" class="bg-primary w-9/12 h-54 font-normal text-xl mt-4">Create</Button>
            </div>
          </Form>


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

let theData = ref({
  name: '',
  initials: '',
  flag: '',
  nationality: ''
})
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]);

</script>