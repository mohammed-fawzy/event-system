<script setup>
  const emit = defineEmits(['update:modelValue'])
  defineProps({
    modelValue: {
      
    },
    name: {
      
    },
    label: {
      
    },
    rules: {
      
    },
    errors: {
      
    }
    
})

  function updateValue(value) {
    emit('update:modelValue', value);
  }
</script>

<template>
  <label for="person_Sn" class="text-xl font-medium text-label mb-4">{{ label }}</label>
  <Field as="InputText" :modelValue="modelValue" @update:modelValue="updateValue" 
    :name="name" 
    :placeholder="$t('common.enterForm', {name: label})" 
    :rules="rules" 
    :invalid="errors[name]"/>  
  <ErrorMessage :name="name" class="text-red-500 mt-2"/>
</template>