<template>
  <Form @submit="onSubmit" v-slot:default="{ errors }">
    <div class="container m-auto grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-8">

      <div class="flex flex-col"> 
        <CustomeTextInput v-model="theData.person_Sn" name="person" :label="$t('form.person_Sn')" :errors="errors" :rules="'required|numeric'"/>
      </div>

      <!-- <div class="flex flex-col"> 
        <label for="person_Sn" class="text-xl font-medium text-label mb-4">{{  $t('form.person_Sn') }}</label>
        <Field as="InputText" v-model="theData.person_Sn" name="person_Sn" :placeholder="$t('common.enterForm', {name: $t('form.person_Sn')})" rules="required|numeric" :invalid="errors.person_Sn"/>
        <ErrorMessage name="person_Sn" class="text-red-500 mt-2"/>
      </div> -->
      <div class="flex flex-col"> 
        <label for="firstname" class="text-xl font-medium text-label mb-4">{{ $t('form.firstname') }}</label>
        <Field as="InputText" v-model="theData.firstname" name="firstname" :placeholder="$t('common.enterForm', {name: $t('form.firstname')})" rules="required" :invalid="errors.firstname"/>
        <ErrorMessage name="firstname" class="text-red-500 mt-2"/>
      </div>

      <div class="flex flex-col"> 
        <label for="lastname" class="text-xl font-medium text-label mb-4">{{ $t('form.lastname') }}</label>
        <Field as="InputText" v-model="theData.lastname" name="lastname" :placeholder="$t('common.enterForm', {name: $t('form.lastname')})" rules="required" :invalid="errors.lastname"/>
        <ErrorMessage name="lastname" class="text-red-500 mt-2"/>
      </div>

      <div class="flex flex-col"> 
        <label for="surname" class="text-xl font-medium text-label mb-4">{{ $t('form.surname') }}</label>
        <Field as="InputText" v-model="theData.surname" name="surname" :placeholder="$t('common.enterForm', {name: $t('form.surname')})" rules="required":invalid="errors.surname"/>
        <ErrorMessage name="surname" class="text-red-500 mt-2"/>
      </div>

      <div class="flex flex-col"> 
        <label for="honor" class="text-xl font-medium text-label mb-4">{{ $t('form.honor') }}</label>
        <Field as="InputText" v-model="theData.honor" name="honor" :placeholder="$t('common.enterForm', {name: $t('form.honor')})" rules="required" :invalid="errors.honor"/>
        <ErrorMessage name="honor" class="text-red-500 mt-2"/>
      </div>

      <div class="flex flex-col"> 
        <label for="email" class="text-xl font-medium text-label mb-4">{{ $t('form.email') }}</label>
        <Field as="InputText" v-model="theData.email" name="email" :placeholder="$t('common.enterForm', {name: $t('form.email')})" rules="required|email" :invalid="errors.email"/>
        <ErrorMessage name="email" class="text-red-500 mt-2"/>
      </div>

      <div class="flex flex-col"> 
        <label for="birthdate" class="text-xl font-medium text-label mb-4">{{ $t('form.birthdate') }}</label>
        <Field as="InputText" v-model="theData.birthdate" name="birthdate" :placeholder="$t('common.enterForm', {name: $t('form.birthdate')})" rules="required" :invalid="errors.birthdate"/>
        <ErrorMessage name="birthdate" class="text-red-500 mt-2"/>
      </div>

      <div class="flex flex-col mb-8">
        <label for="gender" class="text-xl font-medium text-label mb-4">{{ $t('form.gender') }}</label>
        <Field name="gender" rules="required" v-model="theData.gender">
          <Dropdown v-model="theData.gender" name="gender" :options="cities" optionLabel="name" :placeholder="$t('common.select')" :invalid="errors.gender" />
          <ErrorMessage name="gender" class="text-red-500 mt-2"/>
        </Field>
      </div>

      <div class="flex flex-col"> 
        <label for="zip" class="text-xl font-medium text-label mb-4">{{ $t('form.zip') }}</label>
        <Field as="InputText" v-model="theData.zip" name="zip" :placeholder="$t('common.enterForm', {name: $t('form.zip')})" rules="required|numeric" :invalid="errors.zip"/>
        <ErrorMessage name="zip" class="text-red-500 mt-2"/>
      </div>

      <div class="flex flex-col"> 
        <label for="phone" class="text-xl font-medium text-label mb-4">{{ $t('form.phone') }}</label>
        <Field as="InputText" v-model="theData.phone" name="phone" :placeholder="$t('common.enterForm', {name: $t('form.phone')})" rules="required|numeric" :invalid="errors.phone"/>
        <ErrorMessage name="phone" class="text-red-500 mt-2"/>
      </div>

      <div class="flex flex-col"> 
        <label for="whatsapp" class="text-xl font-medium text-label mb-4">{{ $t('form.whatsApp') }}</label>
        <Field as="InputText" v-model="theData.whatsapp" name="whatsapp" :placeholder="$t('common.enterForm', {name: $t('form.whatsApp')})" rules="required|numeric" :invalid="errors.whatsapp"/>
        <ErrorMessage name="whatsapp" class="text-red-500 mt-2"/>
      </div>

      <div class="flex flex-col"> 
        <label for="street" class="text-xl font-medium text-label mb-4">{{ $t('form.streetAddress') }}</label>
        <Field as="InputText" v-model="theData.street" name="street" :placeholder="$t('common.enterForm', {name: $t('form.streetAddress')})" rules="required" :invalid="errors.street"/>
        <ErrorMessage name="street" class="text-red-500 mt-2"/>
      </div>

      <div class="flex flex-col col-span-2"> 
        <label for="linkedUrl" class="text-xl font-medium text-label mb-4">{{ $t('form.linkedUrl') }}</label>
        <Field as="InputText" v-model="theData.linkedUrl" name="linkedUrl" :placeholder="$t('common.enterForm', {name: $t('form.linkedUrl')})" rules="required" :invalid="errors.linkedUrl"/>
        <ErrorMessage name="linkedUrl" class="text-red-500 mt-2"/>
      </div>

      <div class="flex flex-col col-span-2"> 
        <label for="jopTitle" class="text-xl font-medium text-label mb-4">{{ $t('form.jopTitle') }}</label>
        <Field as="InputText" v-model="theData.jopTitle" name="jopTitle" :placeholder="$t('common.enterForm', {name: $t('form.jopTitle')})" rules="required" :invalid="errors.jopTitle"/>
        <ErrorMessage name="jopTitle" class="text-red-500 mt-2"/>
      </div>

      <div class="flex flex-col"> 
        <label for="leader_sn" class="text-xl font-medium text-label mb-4">{{ $t('form.leader_sn') }}</label>
        <Field as="InputText" v-model="theData.leader_sn" name="leader_sn" :placeholder="$t('common.enterForm', {name: $t('form.leader_sn')})" rules="required" :invalid="errors.leader_sn"/>
        <ErrorMessage name="leader_sn" class="text-red-500 mt-2"/>
      </div>

      <div class="flex flex-col"> 
        <label for="organization" class="text-xl font-medium text-label mb-4">{{ $t('form.organization') }}</label>
        <Field as="InputText" v-model="theData.organization" name="organization" :placeholder="$t('common.enterForm', {name: $t('form.organization')})" rules="required"  :invalid="errors.organization"/>
        <ErrorMessage name="organization" class="text-red-500 mt-2"/>
      </div>

      <div class="flex flex-col"> 
        <label for="residence_city" class="text-xl font-medium text-label mb-4">{{ $t('form.residence_city') }}</label>
        <Field as="InputText" v-model="theData.residence_city" name="residence_city" :placeholder="$t('common.enterForm', {name: $t('form.residence_city')})" rules="required" :invalid="errors.residence_city"/>
        <ErrorMessage name="residence_city" class="text-red-500 mt-2"/>
      </div>

      <div class="flex flex-col"> 
        <label for="nationality" class="text-xl font-medium text-label mb-4">{{ $t('form.nationality') }}</label>
        <Field as="InputText" v-model="theData.nationality" name="nationality" :placeholder="$t('common.enterForm', {name: $t('form.nationality')})" rules="required" :invalid="errors.nationality"/>
        <ErrorMessage name="nationality" class="text-red-500 mt-2"/>
      </div>

      <div class="flex flex-col col-span-2"> 
        <label for="photo" class="text-xl font-medium text-label mb-4">{{ $t('form.uploadPhoto') }}</label>
        <FileUpload name="demo[]" url="/api/upload" @upload="onAdvancedUpload($event)" chooseLabel="Browse" :showUploadButton="false" :showCancelButton="false" :multiple="true" accept="image/*" :maxFileSize="1000000">
              <template #empty>
                  <p>Or Drag and drop files here to upload.</p>
              </template>
          </FileUpload>
      </div>
      

    </div> <!-- end form -->
      <div class="flex justify-end mb-10">
        <Button class="bg-bgcancel text-primary h-48 font-normal text-2xl mt-4 mr-6">{{ $t('common.cancel') }}</Button>
        <Button type="submit" class="bg-primary h-48 font-normal text-2xl mt-4">{{ $t('common.save') }}</Button>
      </div>
  </Form>
</template>

<script setup>
import Dropdown from 'primevue/dropdown';
const { t } = useI18n();
const value1 = ref(42723);



let theData = ref({
  person_Sn: '',
  firstname: '',
  lastname: '',
  surname: '',
  honor: '',
  email: '',
  birthdate: '',
  gender: '',
  zip: '',
  phone: '',
  whatsapp: '',
  street: '',
  linkedUrl: '',
  jopTitle: '',
  leader_sn: '',
  organization: '',
  residence_city: '',
  nationality: ''
});

// if (id) { // edit
//   const { data } = useApi(`/api/products/${props.id}`);
// }


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
