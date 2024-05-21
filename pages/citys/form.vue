<template>
      <Dialog :visible="true" modal :header="id ? $t('common.editForm', { name: $t('table.city')}) : $t('common.addNewForm.female', { name: $t('table.city') })"  @update:visible="closeModal" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
          <ProgressSpinner  v-if="pending && props.id"/>
          <Form v-else @submit="onSubmit" v-slot:default="{ errors }">
            <div class="flex justify-between mb-8 gap-9">
            
            <div class="flex flex-col basis-2/4">
              <label for="name" class="text-xl font-medium text-label mb-4">{{  $t('common.name') }}</label>
              <Field as="InputText" name="name" v-model="theData.name" :placeholder="$t('common.enterForm', {name: $t('common.name')})" />
            </div>
           
              <div class="flex flex-col basis-2/4"> 
                <label for="code" class="text-xl font-medium text-label mb-4">{{ $t('table.code') }}</label>
                <Field as="InputText" name="code" :placeholder="$t('table.code')" rules="required" v-model="theData.code" :invalid="errors.code"/>
                <ErrorMessage name="code" class="text-red-500 mt-2"/>
              </div>
            </div>
            <div class="flex justify-between mb-8 gap-9">
              <div class="flex flex-col basis-2/4"> 
                <label for="Initials" class="text-xl font-medium text-label mb-4">{{ $t('table.initials') }}</label>
                <Field as="InputText" name="initials" :placeholder="$t('table.initials')" rules="required" v-model="theData.initials" :invalid="errors.Initials"/>
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
            <div v-for="error in apiErrors" class="mb-4">
              <InlineMessage severity="error"> 
                {{ error.join(' ') }}
              </InlineMessage>
            </div>
            <div class="flex justify-center">
              <Button type="submit" :loading="submiting" class="bg-primary w-9/12 h-54 font-normal text-xl mt-4" :label="$t('common.create')" />
            </div>
          </Form>
      </Dialog>
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


const { pending, execute } = useApi(`cities/${props.id}`, {
  immediate: false,
  transform: (res) => {
    theData.value = res.data
  }
})

onMounted(() => {
  if (props.id) {
    execute();
  }
})


const cities = ref([
  { name: 'New York', code: 'NY', value: 'New York' },
  { name: 'Rome', code: 'RM', value: 'Rome' },
  { name: 'London', code: 'LDN', value: 'London' },
  { name: 'Istanbul', code: 'IST', value: 'Istanbul' },
  { name: 'Paris', code: 'PRS', value: 'Paris' }
]);

const toast = useToast();

let submiting = ref(false);
const apiErrors = ref([]);
const onSubmit = async ( value ) => {
  submiting.value = true;
  try {
    await use$Fetch( props.id ? `cities/${props.id}` : 'cities' , { method: props.id ? 'PUT' : 'POST', body: value })
      submiting.value = false;
      toast.add({ severity: 'success', summary: t('common.Successful'), detail: t('common.UpdatedSuccessfully'), life: 3000 });
      closeModal();
      emit('submit');

  }
  catch (error) {
    submiting.value = false;
    apiErrors.value = Object.values(error.response._data?.errors);
  }

}


</script>
