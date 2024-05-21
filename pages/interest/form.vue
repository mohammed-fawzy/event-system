<template>
  <div class="card flex justify-center rounded-18px">
      <Dialog :visible="true" modal :header="id ? $t('common.editForm', { name: $t('table.interest')}) : $t('common.addNewForm.female', { name: $t('table.interest') })"  @update:visible="closeModal" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
          <ProgressSpinner  v-if="pending && props.id"/>
          <Form v-else @submit="onSubmit" v-slot:default="{ errors }">
              <div class="flex flex-col">
                <CustomeTextInput v-model="theData.name" name="name" :label="$t('form.name')" :errors="errors" :rules="'required'"/>
              </div>
              <div v-for="error in apiErrors" class="mb-4">
              <InlineMessage severity="error"> 
                {{ error.join(' ') }}
              </InlineMessage>
            </div>
            <div class="flex justify-center">
              <Button type="submit" :loading="submiting" class="bg-primary w-9/12 h-54 font-normal text-xl mt-4" :label="$t('common.create')" />
            </div>
          </Form>
      </Dialog>
  </div>
</template>

<script setup>
import Dropdown from 'primevue/dropdown';
const { t } = useI18n();

const emit = defineEmits(['close-modal', 'submit']);
const closeModal = () => {
  emit("closeModal");
};
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  id: {
    type: Number,
  }
});

let theData = ref({
  name: '',
})

const { pending, execute } = useApi(`interests/${props.id}`, {
  immediate: false,
  transform: (res) => {
    theData.value = res.data
  }
})

onMounted(() => {
  if (props.id) {
    execute();
  }
})

const toast = useToast();

let submiting = ref(false);
const apiErrors = ref([]);
const onSubmit = async ( value ) => {
  submiting.value = true;
  try {
    await use$Fetch( props.id ? `interests/${props.id}` : 'interests' , { method: props.id ? 'PUT' : 'POST', body: value })
      submiting.value = false;
      toast.add({ severity: 'success', summary: t('common.Successful'), detail: t('common.UpdatedSuccessfully'), life: 3000 });
      closeModal();
      emit('submit');

  }
  catch (error) {
    submiting.value = false;
    apiErrors.value = Object.values(error.response._data?.errors);
  }

}


</script>
