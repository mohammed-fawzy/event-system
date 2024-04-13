
<template>
  <div class="">
    <div class="flex justify-between items-center mb-10">
      <p class="font-medium text-blue10 text-xl capitalize">{{routerName}}</p>
      <Button :label="$t('common.addNew')" icon="pi pi-plus" class="bg-primary text-base h-42" @click="visible = true"/>
    </div>
      <DataTable :value="products" paginator :rows="5">
          <Column field="id" header="ID"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="code" header="Initials"></Column>
          <Column field="category" header="Flag"></Column>
          <Column field="quantity" header="Date"></Column>
          <Column field="quantity" header="Nationality"></Column>
          <Column field="actions" header="Actions">
            <template #body="slotProps">
              <!-- <button class="p-link layout-menu-button layout-topbar-button" @click="console.log(slotProps.data.id)"> mm </button> -->
              <div class="flex justify-center">
                  <Button type="button" text class="text-blue3" icon="pi pi-ellipsis-h" @click="toggle($event, slotProps.data.id)" aria-haspopup="true" aria-controls="overlay_menu" />
                  <Menu ref="menu" :model="items" class="bg-white" id="overlay_menu" :popup="true" pt=""/>
              </div> 
            </template> 
          </Column>
      </DataTable>
  </div>
  <Form  :visible="visible" @close-modal="closeModal" :id="selectedId"/>
</template>

<script setup>
import Form from './form.vue'

const menu = ref();
const items = computed(() => [
  {
    type: 'edit',
    label: 'Edit',
    icon: 'pi pi-pencil',
    command: ( event ) => {
      console.log( 'edit' );
      visible.value = true
    }
  },
  {
    type: 'delete',
    label: 'Delete',
    icon: 'pi pi-trash',
    command: ( event ) => {
      console.log( 'delete' );
    }
  }
]);
const selectedId = ref();
const toggle = (event, id) => {
    menu.value.toggle(event);
    selectedId.value = id
};
let routerName = computed(() => {
  return useRouter().currentRoute.value.name 
})

let visible = ref(false);
const closeModal = () => {
  visible.value = false
}

let products = [
  {
    id: 1000,
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5,
    actions: 'edit, delete'
  },
  {
    id: 1001,
    code: 'nvklal433',
    name: 'Black Watch',
    description: 'Product Description',
    image: 'black-watch.jpg',
    price: 72,
    category: 'Accessories',
    quantity: 61,
    inventoryStatus: 'INSTOCK',
    rating: 4,
    actions: 'edit, delete'
  },
  {
    id: 1002,
    code: 'zz21cz3c1',
    name: 'Blue Band',
    description: 'Product Description',
    image: 'blue-band.jpg',
    price: 79,
    category: 'Fitness',
    quantity: 2,
    inventoryStatus: 'LOWSTOCK',
    rating: 3,
    actions: 'edit, delete'
  }

]

</script>
