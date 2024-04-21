<template>
  <div class="card flex justify-center">
      <Dialog :visible="visible" modal :header="id ? $t('common.editForm', { name: $t('table.listedType')}) : $t('common.addNewForm.female', { name: $t('table.listedType') })"  @update:visible="closeModal" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
          <Form @submit="onSubmit" v-slot:default="{ errors }">
            <div class="flex flex-col mb-8">
              <CustomeTextInput v-model="theData.name" name="name" :label="$t('form.name')" :errors="errors" :rules="'required'"/>
            </div>
            <div class="flex flex-col mb-8"> 
              <label for="description" class="text-xl font-medium text-label mb-4">{{ $t('common.description') }}</label>
              <Field as="Textarea" rows="5" name="description" :placeholder="$t('common.description')" rules="required" v-model="theData.description" :invalid="errors.description"/>
              <ErrorMessage name="description" class="text-red-500 mt-2"/>
            </div>

            <div class="flex flex-col"> 
              <label for="photo" class="text-xl font-medium text-label mb-4">{{ $t('form.uploadCv') }}</label>
              <FileUpload 
                name="theFile"
                accept=".pdf"
                @select="onAdvancedUpload($event)"
                :auto="true"
                chooseLabel="Browse"
                :showUploadButton="false" 
                :showCancelButton="false" 
                :maxFileSize="1000000">
                    <template #empty>
                        <p class="text-blue3">Or Drag and drop files here to upload.</p>
                    </template>
                </FileUpload>
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
  description: '',
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
