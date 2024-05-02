<template>
  <div class="flex justify-start items-center mb-9 mt-1">
    <i class="pi pi-arrow-left mr-2 rtl:ml-2" @click="$router.go(-1)"></i>
    <div class="text-xl font-medium"> Person Form </div>
  </div>
  <Form @submit="onSubmit" v-slot:default="{ errors }">
    <div class="container m-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">

      <div class="flex flex-col"> 
        <CustomeTextInput v-model="theData.person_Sn" name="person Sn" :label="$t('form.person_Sn')" :errors="errors" :rules="'required|numeric'"/>
      </div>

      <div class="flex flex-col"> 
        <CustomeTextInput v-model="theData.firstname" name="first name" :label="$t('form.firstname')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col"> 
        <CustomeTextInput v-model="theData.lastname" name="last name" :label="$t('form.lastname')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col"> 
        <CustomeTextInput v-model="theData.surname" name="surname" :label="$t('form.surname')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col"> 
        <CustomeTextInput v-model="theData.honor" name="honor" :label="$t('form.honor')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.email" name="email" :label="$t('form.email')" :errors="errors" :rules="'required|email'"/>
      </div>

      <div class="flex flex-col"> 
        <CustomeTextInput v-model="theData.birthdate" name="birthdate" :label="$t('form.birthdate')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeSelect v-model="theData.gender" :options="cities" name="gender" :label="$t('form.gender')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.zip" name="zip" :label="$t('form.zip')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col"> 
        <CustomeTextInput v-model="theData.phone" name="phone" :label="$t('form.phone')" :errors="errors" :rules="'required|numeric'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.whatsapp" name="whatsapp" :label="$t('form.whatsApp')" :errors="errors" :rules="'required|numeric'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.street" name="street" :label="$t('form.streetAddress')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col col-span-2"> 
        <CustomeTextInput v-model="theData.linkedUrl" name="linkedUrl" :label="$t('form.linkedUrl')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col col-span-2">
        <CustomeTextInput v-model="theData.jopTitle" name="jopTitle" :label="$t('form.jopTitle')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.leader_sn" name="leader_sn" :label="$t('form.leader_sn')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col"> 
        <CustomeTextInput v-model="theData.organization" name="organization" :label="$t('form.organization')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.residence_city" name="residence_city" :label="$t('form.residence_city')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.nationality" name="nationality" :label="$t('form.nationality')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col col-span-2"> 
        <label for="photo" class="text-xl font-medium text-label mb-4">{{ $t('form.uploadPhoto') }}</label>
        <FileUpload 
          name="theFile"
          accept="image/*"
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

      <div class="flex flex-col col-span-2"> 
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
      

    </div> <!-- end form -->
      <div class="flex justify-end mb-10">
        <Button class="bg-bgcancel text-primary h-48 font-normal text-2xl mt-4 mr-6 rtl:ml-6">{{ $t('common.cancel') }}</Button>
        <Button type="submit" class="bg-primary h-48 font-normal text-2xl mt-4">{{ $t('common.save') }}</Button>
      </div>
  </Form>
</template>

<script setup>
const { t } = useI18n();



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

const route = useRouter().currentRoute.value
const theId = route.params.id


  if (theId) { // edit
      const { data } = useApi(`/api/products/${theId}`);
    }
    
    
    


const cities = ref([
  { name: 'New York', code: 'NY', value: 'New York' },
  { name: 'Rome', code: 'RM', value: 'Rome' },
  { name: 'London', code: 'LDN', value: 'London' },
  { name: 'Istanbul', code: 'IST', value: 'Istanbul' },
  { name: 'Paris', code: 'PRS', value: 'Paris' }
]);

function onAdvancedUpload(event) {
  console.log('event', event);
}

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
