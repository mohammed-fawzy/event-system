<template>
  <div class="card flex justify-center">
      <Dialog :visible="true" modal :header="id ? $t('common.editForm', { name: $t('table.country')}) : $t('common.addNewForm.female', { name: $t('table.country') })"  @update:visible="closeModal" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
          <Form @submit="onSubmit" v-slot:default="{ errors }">
            <div class="flex flex-col mb-8">
              <label for="name" class="text-xl font-medium text-label mb-4">{{  $t('common.name') }}</label>
              <Field as="InputText" name="name" :placeholder="$t('common.enterForm', {name: $t('common.name')})" />
            </div>
            <div class="flex justify-between mb-8 gap-9">
              <div class="flex flex-col basis-2/4"> 
                <label for="initials" class="text-xl font-medium text-label mb-4">{{ $t('table.initials') }}</label>
                <Field as="InputText" name="initials" :placeholder="$t('table.initials')" rules="required" v-model="theData.initials" :invalid="errors.Initials"/>
                <ErrorMessage name="initials" class="text-red-500 mt-2"/>
              </div>

              <div class="flex flex-col basis-2/4">
                <label for="flag" class="text-xl font-medium text-label mb-4">{{ $t('common.flag') }}</label>
                <Field name="flag" rules="required" v-model="theData.flag">
                  <Dropdown v-model="theData.flag" name="Flag" :options="cities" optionValue="name" optionLabel="name" :placeholder="$t('common.select')" :invalid="errors.Flag"/>
                  <ErrorMessage name="flag" class="text-red-500 mt-2"/>
                </Field>
              </div>
            </div>
            <div class="flex flex-col mb-8">
              <label for="nationality" class="text-xl font-medium text-label mb-4">{{ $t('common.nationality') }}</label>
              <Field name="nationality" rules="required" v-model="theData.nationality">
                <Dropdown v-model="theData.nationality" name="nationality" :options="cities" optionValue="name" optionLabel="name" :placeholder="$t('common.select')" :invalid="errors.Nationality" />
                <ErrorMessage name="nationality" class="text-red-500 mt-2"/>
              </Field>
            </div>
            <div v-for="error in apiErrors" class="mb-4">
              <InlineMessage severity="error"> 
                {{ error }}
              </InlineMessage>
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
    default: ""
  }
});

let theData = ref({
  name: '',
  initials: '',
  flag: '',
  nationality: ''
})

const { data, execute } =  useApi(`/api/countries/${props.id}`, {
  immediate: false
})

onMounted(() => {
  // console.log('id', props.id)
  execute().then((res) => {
    theData.value = res
  })
})



// console.log('data', data);

const cities = ref([
  { name: 'New York', code: 'NY', value: 'New York' },
  { name: 'Rome', code: 'RM', value: 'Rome' },
  { name: 'London', code: 'LDN', value: 'London' },
  { name: 'Istanbul', code: 'IST', value: 'Istanbul' },
  { name: 'Paris', code: 'PRS', value: 'Paris' }
]);

const toast = useToast();

const apiErrors = ref([]);
const onSubmit = ( value ) => {
  // if (props.id) { // edit
  //   theData.value.id = props.id
  //   useApi(`countries/${props.id}`, 'PUT', theData.value).then((res) => {
  //     console.log('res', res);
  //     toast.add({ severity: 'success', summary: t('common.Successful'), detail: t('common.UpdatedSuccessfully'), life: 3000 });
  //     closeModal();
  //     emit('submit');
  //   })
  // }

  // console.log('test)

// const  response = use$Fetch('countries', { method: 'POST', body: value})

// console.log('mm1', response)
// console.log('mm2', response.data)
// console.log('mm3', response.json())

//   console.log('res', res);
//   if (error.value.statusCode == 400) {
//     apiErrors.value = Object.values(error.value.data.errors);
//     return
//   }
//   else {
//     toast.add({ severity: 'success', summary: t('common.Successful'), detail: t('common.CreatedSuccessfully'), life: 3000 });
//     closeModal();
//     emit('submit');
//   }
// })


// const {data, error} =  useApi('countries', { method: 'POST', body: value })


    // toast.add({ severity: 'success', summary: t('common.Successful'), detail: t('common.CreatedSuccessfully'), life: 3000 });
    // closeModal();
    // emit('submit');
  
}


</script>
