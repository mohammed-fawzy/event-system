<template>
  <div class="card flex justify-center">
      <Dialog :visible="visible" modal :header="id ? $t('common.editForm', { name: $t('table.eventItem')}) : $t('common.addNewForm.female', { name: $t('table.eventItem') })"  @update:visible="closeModal" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
          <Form @submit="onSubmit" v-slot:default="{ errors }">

            <div class="flex justify-between mb-8 gap-9"> 
              <div class="flex flex-col basis-2/4">
                <CustomeTextInput v-model="theData.itemTitle" name="itemTitle" :label="$t('form.itemTitle')" :errors="errors" :rules="'required'"/>
              </div>
              <div class="flex flex-col basis-2/4">
                <CustomeTextInput v-model="theData.auther" name="auther" :label="$t('form.auther')" :errors="errors" :rules="'required'"/>
              </div>
            </div>

            <div class="flex flex-col mb-8"> 
              <label for="contentSummary" class="text-xl font-medium text-label mb-4">{{ $t('form.contentSummary') }}</label>
              <Field as="Textarea" rows="5" name="contentSummary" :placeholder="$t('form.contentSummary')" rules="required" v-model="theData.contentSummary" :invalid="errors.contentSummary"/>
              <ErrorMessage name="contentSummary" class="text-red-500 mt-2"/>
            </div>

            <div class="flex flex-col mb-8"> 
              <label for="photo" class="text-xl font-medium text-label mb-4">{{ $t('form.uploadFile') }}</label>
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

            <div class="flex justify-between mb-8 gap-9"> 

              <div class="flex flex-col basis-2/4">
                <CustomeTextInput v-model="theData.numberOfCopies" name="numberOfCopies" :label="$t('form.numberOfCopies')" :errors="errors" :rules="'required'"/>
              </div>

              <div class="flex flex-col basis-2/4">
                <CustomeTextInput v-model="theData.price" name="price" :label="$t('form.price')" :errors="errors" :rules="'required'"/>
              </div>

            </div>

            <div class="flex justify-between mb-8 gap-9"> 

              <div class="flex flex-col basis-2/4">
                <CustomeTextInput v-model="theData.iSBNNumber" name="iSBNNumber" :label="$t('form.iSBNNumber')" :errors="errors" :rules="'required'"/>
              </div>

              <div class="flex flex-col basis-2/4">
                <CustomeTextInput v-model="theData.organizationDiscount" name="organizationDiscount" :label="$t('form.organizationDiscount')" :errors="errors" :rules="'required'"/>
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
