<template>
  <div class="flex justify-start items-center mb-9 mt-1">
    <i class="pi pi-arrow-left mr-2" @click="$router.go(-1)"></i>
    <div class="text-xl font-medium"> {{ $t('form.addNewOrganization') }} </div>
  </div>
  <Form @submit="onSubmit" v-slot:default="{ errors }">
    <div class="container card m-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">

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
        <CustomeTextInput v-model="theData.commercialID" name="commercialID" :label="$t('form.commercialID')" :errors="errors" :rules="'required|email'"/>
      </div>

      <div class="flex flex-col"> 
        <CustomeTextInput v-model="theData.commercialExpiration" name="commercialExpiration" :label="$t('form.commercialExpiration')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeSelect v-model="theData.taxExpiration" :options="cities" name="taxExpiration" :label="$t('form.taxExpiration')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.email" name="email" :label="$t('form.email')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col"> 
        <CustomeTextInput v-model="theData.establishDate" name="establishDate" :label="$t('form.establishDate')" :errors="errors" :rules="'required|numeric'"/>
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
        <CustomeTextInput v-model="theData.headOfficeAddress" name="headOfficeAddress" :label="$t('form.headOfficeAddress')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.websiteURL" name="websiteURL" :label="$t('form.websiteURL')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col"> 
        <CustomeTextInput v-model="theData.cityID" name="cityID" :label="$t('form.cityID')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.nationalityID" name="nationalityID" :label="$t('form.nationalityID')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.classificationCode" name="classificationCode" :label="$t('form.classificationCode')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.legalCode" name="legalCode" :label="$t('form.legalCode')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.companyCode" name="companyCode" :label="$t('form.companyCode')" :errors="errors" :rules="'required'"/>
      </div>
    </div> <!-- end card 1 -->
    <div class="card container m-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">

      <div class="flex flex-col"> 
        <label for="photo" class="text-xl font-medium text-label mb-4">{{ $t('form.uploadCompanyLogo') }}</label>
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

      <div class="flex flex-col"> 
        <label for="photo" class="text-xl font-medium text-label mb-4">{{ $t('form.commercialFile') }}</label>
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

      <div class="flex flex-col"> 
        <label for="photo" class="text-xl font-medium text-label mb-4">{{ $t('form.publishingFile') }}</label>
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

    </div>

    <div class="!p-5 card container m-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.managerID" name="managerID" :label="$t('form.managerID')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.iBAN" name="iBAN" :label="$t('form.iBAN')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.swiftCode" name="swiftCode" :label="$t('form.swiftCode')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.bank" name="bank" :label="$t('form.bank')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.bankAccount" name="bankAccount" :label="$t('form.bankAccount')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.membershipNumber" name="membershipNumber" :label="$t('form.membershipNumber')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.publishingLicense" name="publishingLicense" :label="$t('form.publishingLicense')" :errors="errors" :rules="'required'"/>
      </div>

      <div class="flex flex-col">
        <CustomeTextInput v-model="theData.publishingLicenseExpiration" name="publishingLicenseExpiration" :label="$t('form.publishingLicenseExpiration')" :errors="errors" :rules="'required'"/>
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
