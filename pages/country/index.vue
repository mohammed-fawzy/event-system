
<template>
  <div class="">
    <div class="flex justify-between items-center mb-10">
      <p class="font-medium text-blue10 text-xl capitalize">{{route.name}}</p>
      <Button :label="$t('common.addNew')" icon="pi pi-plus" class="bg-primary text-base h-42" @click="visible = true"/>
    </div>
      <DataTable :value="products" paginator :rows="5" >
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
      </DataTable>
  </div>
  <Form  :visible="visible" @close-modal="closeModal"/>
</template>

<script setup>
import Form from './form.vue'

const route = useRoute()

let visible = ref(false);
const closeModal = () => {
  visible.value = false
}

let products = [
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '1001',
    code: 'nvklal433',
    name: 'Black Watch',
    description: 'Product Description',
    image: 'black-watch.jpg',
    price: 72,
    category: 'Accessories',
    quantity: 61,
    inventoryStatus: 'INSTOCK',
    rating: 4
  },
  {
    id: '1002',
    code: 'zz21cz3c1',
    name: 'Blue Band',
    description: 'Product Description',
    image: 'blue-band.jpg',
    price: 79,
    category: 'Fitness',
    quantity: 2,
    inventoryStatus: 'LOWSTOCK',
    rating: 3
  }

]

</script>
