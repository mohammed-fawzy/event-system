import { Title } from '../../../.nuxt/components';
<template>
  <div class="flex justify-start items-center mb-9 mt-1">
    <i class="pi pi-arrow-left mr-2" @click="$router.go(-1)"></i>
    <div class="text-xl font-medium"> {{ $t('table.itemInEventDetails') }} </div>
  </div>
  <div class="container m-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16">

    <div class="card text-base border-2 border-dashed border-blue2 !mb-0">

      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('table.autherName') }}:</p>
        <p class="w-1/2 text-blue6"> 32.32.4545.5 </p>
      </div>

      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.id') }}:</p>
        <p class="w-1/2 text-blue6"> 32.32.4545.5 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('table.title') }}:</p>
        <p class="w-1/2 text-blue6"> 1004 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('table.review') }}:</p>
        <p class="w-1/2 text-blue6"> 775 Crescent Street </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('table.acceptability') }}:</p>
        <p class="w-1/2 text-blue6"> https://www.google.com </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('table.numberOfCopies') }}:</p>
        <p class="w-1/2 text-blue6"> https://www.google.com </p>
      </div>
  
    </div><!-- end card 1-->

    <div class="card text-base border-2 border-dashed border-blue2	self-end">
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.iSBNNumber') }}:</p>
        <p class="w-1/2 text-blue6"> 32.32.4545.5 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.price') }}:</p>
        <p class="w-1/2 text-blue6"> 1004 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.organizationDiscount') }}:</p>
        <p class="w-1/2 text-blue6"> 775 Crescent Street </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.contentSummary') }}</p>
        <p class="w-1/2 text-blue6"> https://www.google.com </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.file') }}</p>
        <p class="w-1/2 text-blue6"> Web Developer </p>
      </div>
    </div><!-- end card -->

  </div>

</template>

<script setup>
const route = useRouter().currentRoute.value
const theId = route.params.id


</script>