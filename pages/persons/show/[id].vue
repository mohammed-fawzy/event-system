import { Title } from '../../../.nuxt/components';
<template>
  <div class="flex justify-start items-center mb-9 mt-1">
    <i class="pi pi-arrow-left mr-2" @click="$router.go(-1)"></i>
    <div class="text-xl font-medium"> {{ $t('table.personDetails') }} </div>
  </div>
  <div class="container m-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16">

    <div class="card text-base border-2 border-dashed border-blue2	">
      <div class="flex items-center mb-6">
        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="rounded-full block mr-4" alt="Image" width="40" />
        <p class="">Lely don adam</p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">ID:</p>
        <p class="w-1/2 text-blue6"> 33232323 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">ID Type:</p>
        <p class="w-1/2 text-blue6"> 33232323 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">ID Expiration:</p>
        <p class="w-1/2 text-blue6"> 33232323 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">Email Address:</p>
        <p class="w-1/2 text-blue6"> debra.holt@example.com </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">Phone:</p>
        <p class="w-1/2 text-blue6"> 33232323343434 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">Whatsapp:</p>
        <p class="w-1/2 text-blue6"> 33232323343434 </p>
      </div>
      <div class="flex justify-between">
        <p class="text-blue10">CV Resume:</p>
        <p class="w-1/2 text-blue6"> 33232323343434 </p>
      </div>
    </div><!-- end card -->

    <div class="card text-base border-2 border-dashed border-blue2	">
      <div class="flex justify-between mb-6">
        <p class="text-blue10">Birth:</p>
        <p class="w-1/2 text-blue6"> 32.32.4545.5 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">Zip:</p>
        <p class="w-1/2 text-blue6"> 1004 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">Street:</p>
        <p class="w-1/2 text-blue6"> 775 Crescent Street </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">URL:</p>
        <p class="w-1/2 text-blue6"> https://www.google.com </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">Jop Title:</p>
        <p class="w-1/2 text-blue6"> Web Developer </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">Leader SN:</p>
        <p class="w-1/2 text-blue6"> 33232323 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">Organization:</p>
        <p class="w-1/2 text-blue6"> Google </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">City:</p>
        <p class="w-1/2 text-blue6"> Rio de Janeiro </p>
      </div>
      <div class="flex justify-between">
        <p class="text-blue10">Nationality:</p>
        <p class="w-1/2 text-blue6"> Brazil </p>
      </div>
    </div><!-- end card -->

  </div>
</template>

<script>
const route = useRouter().currentRoute.value
const theId = route.params.id


</script>