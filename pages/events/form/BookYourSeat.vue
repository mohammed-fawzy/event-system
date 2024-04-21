<template>
  <div class="text-xl font-medium mb-2"> {{ $t('form.organization') }} </div>
  <div class="flex justify-start items-center mb-9 mt-1 text-sm font-medium">
    <div class="text-grey3"> {{ $t('form.addNewOrganization') }} </div>
    <span class="mx-1"> > </span> 
    <div class="font-medium text-grey3"> {{ $t('form.selectActivity') }} </div>
    <span class="mx-1"> > </span> 
    <div> {{ $t('form.organizationProfile') }}</div>
  </div>

  <div class="mb-8">
    <img src="@/assets/images/Profile.png" class="full-width" alt="Image" height="244"/>
  </div>

  <div class="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-1 gap-6">

    <div class="card text-base border-2 border-dashed border-blue2 !mb-0">

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
        <p class="text-blue10">{{ $t('form.commercialID') }}:</p>
        <p class="w-1/2 text-blue6"> https://www.google.com </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.commercialExpiration') }}:</p>
        <p class="w-1/2 text-blue6"> Web Developer </p>
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
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.email') }}:</p>
        <p class="w-1/2 text-blue6"> Brazil </p>
      </div>
      <div class="flex justify-between">
        <p class="text-blue10">{{ $t('form.commercialFile') }}:</p>
        <p class="w-1/2 text-blue6"> Brazil </p>
      </div>
    </div><!-- end card 1-->

    <div class="card text-base border-2 border-dashed border-blue2 !mb-0">

      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.establishDate') }}:</p>
        <p class="w-1/2 text-blue6"> 32.32.4545.5 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.zip') }}:</p>
        <p class="w-1/2 text-blue6"> 1004 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.headOfficeAddress') }}:</p>
        <p class="w-1/2 text-blue6"> 775 Crescent Street </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.websiteURL') }}:</p>
        <p class="w-1/2 text-blue6"> https://www.google.com </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.jobTitle') }}:</p>
        <p class="w-1/2 text-blue6"> Web Developer </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.leader_sn') }}:</p>
        <p class="w-1/2 text-blue6"> 33232323 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.organization') }}:</p>
        <p class="w-1/2 text-blue6"> Google </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.cityID') }}:</p>
        <p class="w-1/2 text-blue6"> Rio de Janeiro </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.nationalityID') }}:</p>
        <p class="w-1/2 text-blue6"> Brazil </p>
      </div>
      <div class="flex justify-between">
        <p class="text-blue10">{{ $t('form.classificationCode') }}:</p>
        <p class="w-1/2 text-blue6"> Brazil </p>
      </div>
    </div><!-- end card 2-->

    <div class="card text-base border-2 border-dashed border-blue2">

      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.publishingFile') }}:</p>
        <p class="w-1/2 text-blue6"> 32.32.4545.5 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.legalCode') }}:</p>
        <p class="w-1/2 text-blue6"> 1004 </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.companyCode') }}:</p>
        <p class="w-1/2 text-blue6"> 775 Crescent Street </p>
      </div>
      <div class="flex justify-between mb-6">
        <p class="text-blue10">{{ $t('form.managerID') }}:</p>
        <p class="w-1/2 text-blue6"> https://www.google.com </p>
      </div>
      <div class="flex justify-between">
        <p class="text-blue10">{{ $t('form.iBAN') }}:</p>
        <p class="w-1/2 text-blue6"> Web Developer </p>
      </div>

    </div><!-- end card 3 -->

    
    <div class="card text-base border-2 border-dashed border-blue2 self-start">

      <div class="flex justify-between mb-4">
        <p class="text-blue10">{{ $t('form.swiftCode') }}:</p>
        <p class="w-1/2 text-blue6"> 32.32.4545.5 </p>
      </div>
      <div class="flex justify-between mb-4">
        <p class="text-blue10">{{ $t('form.bank') }}:</p>
        <p class="w-1/2 text-blue6"> 1004 </p>
      </div>
      <div class="flex justify-between mb-4">
        <p class="text-blue10">{{ $t('form.bankAccount') }}:</p>
        <p class="w-1/2 text-blue6"> 775 Crescent Street </p>
      </div>
      <div class="flex justify-between mb-4">
        <p class="text-blue10">{{ $t('form.membershipNumber') }}:</p>
        <p class="w-1/2 text-blue6"> https://www.google.com </p>
      </div>
      <div class="flex justify-between mb-4">
        <p class="text-blue10">{{ $t('form.publishingLicense') }}:</p>
        <p class="w-1/2 text-blue6"> Web Developer </p>
      </div>
      <div class="flex justify-between">
        <p class="text-blue10">{{ $t('form.publishingLicenseExpiration') }}:</p>
        <p class="w-1/2 text-blue6"> Web Developer </p>
      </div>

    </div><!-- end card 4 -->

  </div>

</template>

