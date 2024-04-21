import { Title } from '../../../.nuxt/components';
<template>
  <div class="flex justify-start items-center mb-9 mt-1">
    <i class="pi pi-arrow-left mr-2" @click="$router.go(-1)"></i>
    <div class="text-xl font-medium"> {{ $t('table.eventDetails') }} </div>
  </div>
  <div class="container m-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16">

    <div class="card text-base border-2 border-dashed border-blue2 !mb-0">

      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.name') }}:</p>
        <p class="w-1/2 text-blue6"> 32.32.4545.5 </p>
      </div>

      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.commercialName') }}:</p>
        <p class="w-1/2 text-blue6"> 32.32.4545.5 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.abbreviation') }}:</p>
        <p class="w-1/2 text-blue6"> 1004 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.nameTag') }}:</p>
        <p class="w-1/2 text-blue6"> 775 Crescent Street </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.email') }}:</p>
        <p class="w-1/2 text-blue6"> https://www.google.com </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.zip') }}:</p>
        <p class="w-1/2 text-blue6"> https://www.google.com </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.phone.1') }}:</p>
        <p class="w-1/2 text-blue6"> 33232323 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.phone.2') }}:</p>
        <p class="w-1/2 text-blue6"> Google </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.whatsApp') }}:</p>
        <p class="w-1/2 text-blue6"> Rio de Janeiro </p>
      </div>
      <div class="flex justify-between">
        <p class="text-blue10">{{ $t('form.websiteURL') }}:</p>
        <p class="w-1/2 text-blue6"> Brazil </p>
      </div>
  
    </div><!-- end card 1-->

    <div class="card text-base border-2 border-dashed border-blue2	self-end">
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.cityID') }}:</p>
        <p class="w-1/2 text-blue6"> 32.32.4545.5 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.president') }}:</p>
        <p class="w-1/2 text-blue6"> 1004 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.startingDate') }}:</p>
        <p class="w-1/2 text-blue6"> 775 Crescent Street </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.registrationStartDate') }}</p>
        <p class="w-1/2 text-blue6"> https://www.google.com </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.registrationEndDate') }}</p>
        <p class="w-1/2 text-blue6"> Web Developer </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.eventEndDate') }}:</p>
        <p class="w-1/2 text-blue6"> 33232323 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.publicStartDate') }}:</p>
        <p class="w-1/2 text-blue6"> Google </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.location') }}:</p>
        <p class="w-1/2 text-blue6"> Rio de Janeiro </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.eventSpecialtySn') }}:</p>
        <p class="w-1/2 text-blue6"> Brazil </p>
      </div>
      <div class="flex justify-between">
        <p class="text-blue10">{{ $t('form.eventSeries') }}:</p>
        <p class="w-1/2 text-blue6"> Brazil </p>
      </div>
    </div><!-- end card -->

  </div>

  <div>
    <Button class="bg-primary h-48 font-normal text-2xl mt-12 ml-auto !block">{{ $t('common.subscription') }}</Button>
  </div>
</template>

<script setup>
const route = useRouter().currentRoute.value
const theId = route.params.id


</script>