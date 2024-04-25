<template>
   <div class="text-2xl font-medium mb-10 text-primary">
    {{ $t('form.products') }}
    </div>
  <div class="container m-auto grid grid-cols-1 grid-rows-none md:grid-cols-4 lg:grid-cols-4 gap-6">
    <div class="card !mb-0 !p-4 relative active-card self-start" v-for="i in 5" @click="activeCard" :class="{ 'active-card': i == 1 }">
      <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="block h-120" alt="Image" width="100%"/>
      <img src="@/assets/images/checkbox.png" alt="Image" width="32" class="absolute -top-4 -right-4"/>
      <div class="text-base font-normal text:blue5 mt-4">Samsung Electronics Samsung Galexy S21 5G</div>
      <p class="text-base font-normal text:blue5 mt-4">Qu: <span class="text-grey3">(234)</span></p>
      <InputText type="text" class="!bg-white w-full h-8 rounded mt-4 invisible" v-model="quantity" :placeholder="$t('common.enterForm') + $t('form.quantity')" name="quantity"/>
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

const quantity = ref();

const onSubmit = () => {
  console.log('onSubmit')
  emit("next");
}

</script>

<style>
  .active-card {
    border: 1px solid rgba(21, 109, 137, 1);
    box-shadow: 0 4px 20px 0 rgba(21, 109, 137, 0.12);

    input {
      visibility: visible;
      transition: visibility ease-in .5s;
    }
  }

</style>