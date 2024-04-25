<template>
  <Form @submit="onSubmit" v-slot:default="{ errors }">
   
    <div class="container m-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">

      <div class="flex flex-col"> 
        <CustomeTextInput v-model="theData.name" name="name" :label="$t('form.name')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col"> 
        <CustomeTextInput v-model="theData.commercialName" name="commercialName" :label="$t('form.commercialName')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col"> 
        <CustomeTextInput v-model="theData.abbreviation" name="abbreviation" :label="$t('form.abbreviation')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col"> 
        <CustomeTextInput v-model="theData.nameTag" name="nameTag" :label="$t('form.nameTag')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.email" name="email" :label="$t('form.email')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.zip" name="zip" :label="$t('form.zip')" :errors="errors" :rules="'required|numeric'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.phone1" name="phone1" :label="$t('form.phone.1')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col"> 
        <CustomeTextInput v-model="theData.phone2" name="phone2" :label="$t('form.phone.2')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col"> 
        <CustomeTextInput v-model="theData.whatsapp" name="whatsapp" :label="$t('form.whatsApp')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.websiteURL" name="websiteURL" :label="$t('form.websiteURL')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col"> 
        <CustomeTextInput v-model="theData.cityID" name="cityID" :label="$t('form.cityID')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.president" name="president" :label="$t('form.president')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.startingDate" name="startingDate" :label="$t('form.startingDate')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.registrationStartDate" name="registrationStartDate" :label="$t('form.registrationStartDate')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.registrationEndDate" name="registrationEndDate" :label="$t('form.registrationEndDate')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.eventEndDate" name="eventEndDate" :label="$t('form.eventEndDate')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.publicStartDate" name="publicStartDate" :label="$t('form.publicStartDate')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.streetAddress" name="streetAddress" :label="$t('form.streetAddress')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.eventSpecialtySn" name="eventSpecialtySn" :label="$t('form.eventSpecialtySn')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.eventSeries" name="eventSeries" :label="$t('form.eventSeries')" :errors="errors" :rules="'required'"/>
      </div>

    </div> <!-- end form -->
    <div class="flex justify-end mb-10">
      <Button class="bg-bgcancel text-primary h-48 font-normal text-2xl mt-4 mr-6">{{ $t('common.cancel') }}</Button>
      <Button @click="onSubmit" class="bg-primary h-48 font-normal text-2xl mt-4">{{ $t('common.next') }}</Button>
    </div>
  </Form>
</template>

<script setup>
const { t } = useI18n();

const emit = defineEmits(['next']);

let theData = ref({
  name: '',
  commercialName: '',
  abbreviation: '',
  nameTag: '',
  commercialID: '',
  commercialExpiration:'',
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
  emit("next");

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
