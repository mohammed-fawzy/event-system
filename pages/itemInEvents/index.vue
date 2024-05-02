
<template>
  <div class="">
    <div class="flex justify-between items-center mb-10">
      <p class="font-medium text-blue10 text-xl capitalize">{{ $t(`sideMenu.${routerName}`)}}</p>
      <Button :label="$t('common.addNew')" icon="pi pi-plus" class="bg-primary text-base h-42" @click="visible = true"/>
    </div>
      <DataTable :value="products" paginator :rows="5" @row-click="onRowClick">
          <Column field="id" :header="$t('common.id')"></Column>
          <Column field="autherName" :header="$t('table.autherName')">
            <template #body="slotProps">
              <div class="flex items-center">
                <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="rounded-full block mr-4" alt="Image" width="40" />
                {{ slotProps.data.autherName }}
              </div>
            </template>
          </Column>
          <Column field="price" :header="$t('table.contentSummary')"></Column>
          <Column field="price" :header="$t('table.price')"></Column>
          <Column field="numberOfCopies" :header="$t('table.numberOfCopies')"></Column>
          <Column field="date" :header="$t('common.date')"></Column>
          <Column field="review" :header="$t('table.review')">
            <template #body="slotProps"> 
              <Chip :label="slotProps.data.review" class="bg-red10 text-red1" />
            </template>
          </Column>
          <Column field="acceptability" :header="$t('table.acceptability')">
            <template #body="slotProps"> 
              <Chip :label="slotProps.data.review" class="bg-green10 text-green1" />
            </template>
          </Column>
          <Column field="actions" :header="$t('common.action')">
            <template #body="slotProps">
              <!-- <button class="p-link layout-menu-button layout-topbar-button" @click="console.log(slotProps.data.id)"> mm </button> -->
              <div class="flex justify-center">
                  <Button type="button" text class=" text-blue3" icon="pi pi-ellipsis-h" @click="toggle($event, slotProps.data.id)" aria-haspopup="true" aria-controls="overlay_menu" />
                  <Menu ref="menu" :model="editDeleteMenu" class="bg-white" id="overlay_menu" :popup="true" pt=""/>
              </div> 
            </template> 
          </Column>
      </DataTable>
  </div>
  <Form :visible="visible" @close-modal="closeModal" :id="selectedId" @submit="refresh"/>
  <ConfirmDialog></ConfirmDialog>
</template>

<script setup>
import Form from './form.vue'

const { t } = useI18n();
const router = useRouter();
const { data, refresh } = useApi('/api/products');

const confirm = useConfirm();
const toast = useToast();

let routerName = computed(() => {
  return useRouter().currentRoute.value.name 
})


const menu = ref();
const editDeleteMenu = computed(() => [
  {
    type: 'edit',
    label: t('common.edit'),
    icon: 'pi pi-pencil',
    command: () => {
      visible.value = true
    }
  },
  {
    type: 'delete',
    label: t('common.delete'),
    icon: 'pi pi-trash',
    command: () => {
      deleteConfirm();
    }
  }
]);
 const deleteConfirm = () => {
  confirm.require({
      message: t('common.deleteConfirm'),
      header: t('common.delete'),
      rejectClass: 'p-button-text p-button-text bg-primary',
      acceptClass: 'p-button-danger p-button-text bg-red-500 text-white',
      acceptLabel: t('common.yes'),
      rejectLabel: t('common.no'),
      accept: () => {
        useApi('DELETE', `country/${selectedId.value}`).then(() => {
          refresh();
          toast.add({ severity: 'info', summary: t('common.confirmed'), detail: t('common.doneDeleted'), life: 3000 });
        })
      },
      reject: () => {
      
      }
  });
};
const selectedId = ref();
const toggle = (event, id) => {
    menu.value.toggle(event);
    selectedId.value = id
};
let visible = ref(false);
const closeModal = () => {
  visible.value = false
  selectedId.value = null
}

let products = [
  {
    id: 1000,
    autherName: 'Bamboo Watch',
    description: 'the Description',
    code: 'BW',
    country: 'India',
    initials: 'BW',
    date: '2019-01-01',
    price: 10,
    numberOfCopies: 10,
    review: 'Good',
    acceptability: 'Acceptable',
    nationality: 'India',
    flag: 'india.png',
    rating: 5,
    actions: 'edit, delete'
  },
  {
    id: 1001,
    autherName: 'Black Watch',
    description: 'the description',
    code: 'BW',
    country: 'India',
    initials: 'BW',
    date: '2019-01-01',
    price: 10,
    numberOfCopies: 10,
    review: 'Good',
    acceptability: 'Acceptable',
    nationality: 'India',
    flag: 'india.png',
    actions: 'edit, delete'
  },
  {
    id: 1002,
    autherName: 'Blue Band',
    description: 'the description',
    code: 'BW',
    country: 'India',
    initials: 'BB',
    date: '2019-01-01',
    price: 10,
    numberOfCopies: 10,
    review: 'Good',
    acceptability: 'Acceptable',
    nationality: 'India',
    flag: 'india.png',
    actions: 'edit, delete'
  }

]

function onRowClick(event) {
  router.push({path :`/itemInEvents/show/${event.data.id}`})
}

</script>
