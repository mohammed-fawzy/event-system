<template>
  <div class="card flex justify-center">
      <Dialog :visible="visible" modal :header="id ? $t('common.editForm', { name: $t('table.city')}) : $t('common.addNewForm.female', { name: $t('table.city') })"  @update:visible="closeModal" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
          <Form @submit="onSubmit" v-slot:default="{ errors }">
            <div class="flex flex-col mb-8">
              <label for="name" class="text-xl font-medium text-label mb-4">{{  $t('common.name') }}</label>
              <Field as="InputText" name="name" :placeholder="$t('common.enterForm', {name: $t('common.name')})" />
            </div>
            <div class="flex justify-between mb-8 gap-9">
              <div class="flex flex-col basis-2/4"> 
                <label for="Initials" class="text-xl font-medium text-label mb-4">{{ $t('table.initials') }}</label>
                <Field as="InputText" name="Initials" :placeholder="$t('table.initials')" rules="required" v-model="theData.initials" :invalid="errors.Initials"/>
                <ErrorMessage name="Initials" class="text-red-500 mt-2"/>
              </div>

              <div class="flex flex-col basis-2/4">
                <label for="Country" class="text-xl font-medium text-label mb-4">{{ $t('common.country') }}</label>
                <Field name="Country" rules="required" v-model="theData.country">
                  <Dropdown v-model="theData.country" name="Country" :options="cities" optionLabel="name" :placeholder="$t('common.select')" :invalid="errors.Flag"/>
                  <ErrorMessage name="Country" class="text-red-500 mt-2"/>
                </Field>
              </div>
            </div>
            <div class="flex justify-center">
              <Button type="submit" class="bg-primary w-9/12 h-54 font-normal text-xl mt-4">{{ $t('common.create') }}</Button>
            </div>
          </Form>
      </Dialog>
  </div>
</template>

<script setup>
import Dropdown from 'primevue/dropdown';
const { t } = useI18n();

const emit = defineEmits(['close-modal', 'submit']);
const closeModal = () => {
  emit("closeModal");
};
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  id: {
    type: Number,
  }
});

let theData = ref({
  name: '',
  initials: '',
  country: '',
})

if (props.id) { // edit
  const { data } = useApi(`/api/products/${props.id}`);
}


const cities = ref([
  { name: 'New York', code: 'NY', value: 'New York' },
  { name: 'Rome', code: 'RM', value: 'Rome' },
  { name: 'London', code: 'LDN', value: 'London' },
  { name: 'Istanbul', code: 'IST', value: 'Istanbul' },
  { name: 'Paris', code: 'PRS', value: 'Paris' }
]);

const toast = useToast();

const onSubmit = ( value ) => {
  if (props.id) { // edit
    theData.value.id = props.id
    useApi(`/api/products/${props.id}`, 'PUT', theData.value).then((res) => {
      console.log('res', res);
      toast.add({ severity: 'success', summary: t('common.Successful'), detail: t('common.UpdatedSuccessfully'), life: 3000 });
      closeModal();
      emit('submit');
    })
  }

  useApi('/api/products', 'POST', theData.value).then((res) => {
    console.log('res', res);
    toast.add({ severity: 'success', summary: t('common.Successful'), detail: t('common.CreatedSuccessfully'), life: 3000 });
    closeModal();
    emit('submit');
  })
  
}


</script>
