<template>
  <div class="text-xl font-medium mb-2"> {{ $t('form.organization') }} </div>
  <div class="flex justify-start items-center mb-9 mt-1 text-sm font-medium">
    <div class="text-grey3"> {{ $t('form.addNewOrganization') }} </div>
    <span class="mx-1"> > </span> 
    <div class="font-medium"> {{ $t('form.selectActivity') }} </div>
  </div>

  <div class="container m-auto grid grid-cols-1 grid-rows-none md:grid-cols-5 lg:grid-cols-5 gap-6">
    <div class="card relative active-card self-start" v-for="i in 5" @click="activeCard">
      <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="rounded-full block mr-4" alt="Image" width="96" />
      <img src="@/assets/images/checkbox.png" alt="Image" width="32" class="absolute top-2 right-2"/>
      <div class="text-base font-normal text:blue5 mt-6">Publishing books</div>
    </div>
  </div>

  <div class="flex justify-end mb-10 mt-10">
    <Button class="bg-bgcancel text-primary h-48 font-normal text-2xl mt-4 mr-6">{{ $t('common.cancel') }}</Button>
    <Button @click="onSubmit" class="bg-primary h-48 font-normal text-2xl mt-4">{{ $t('common.next') }}</Button>
  </div>

</template>
<script setup>

const emit = defineEmits(['next']);

const activeCard = () => {
  console.log('activeCard')
}

const onSubmit = () => {
  console.log('onSubmit')
  emit("next");
}

</script>

<style>
  .active-card {
    border: 1px solid rgba(21, 109, 137, 1);
    box-shadow: 0 4px 20px 0 rgba(21, 109, 137, 0.12);
  }

</style>