
<template>
  <div class="">
    <div class="flex justify-between items-center mb-10">
      <p class="font-medium text-blue10 text-xl capitalize">{{ $t(`sideMenu.${routerName}`)}}</p>
      <Button :label="$t('common.addNew')" icon="pi pi-plus" class="bg-primary text-base h-42" @click="$router.push('/events/form')"/>
    </div>
      <DataTable :value="products" paginator :rows="5" @row-click="onRowClick">
          <Column field="id" :header="$t('common.id')"></Column>
          <Column field="name" :header="$t('common.name')">
            <template #body="slotProps">
              <div class="flex items-center">
                <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="rounded-full block mr-4" alt="Image" width="40" />
                {{ slotProps.data.name }}
              </div>
            </template>
          </Column>
          <Column field="description" :header="$t('common.description')"></Column>
          <Column field="phone" :header="$t('common.phone')"></Column>
          <Column field="email" :header="$t('common.email')"></Column>
          <Column field="address" :header="$t('common.address')"></Column>
          <Column field="date" :header="$t('common.date')"></Column>
          <Column field="actions" :header="$t('common.action')">
            <template #body="slotProps">
              <div class="flex justify-center">
                  <Button type="button" text class=" text-blue3" icon="pi pi-ellipsis-h" @click="toggle($event, slotProps.data.id)" aria-haspopup="true" aria-controls="overlay_menu" />
                  <Menu ref="menu" :model="editDeleteMenu" class="bg-white" id="overlay_menu" :popup="true" pt=""/>
              </div> 
            </template> 
          </Column>
      </DataTable>
  </div>
  <ConfirmDialog></ConfirmDialog>
</template>

<script setup>
const { t } = useI18n();
const router = useRouter();
// const { data, refresh } = useApi('/api/products');

const confirm = useConfirm();
const toast = useToast();

const routerName = computed(() => {
  return useRouter().currentRoute.value.name 
})


const menu = ref();
const editDeleteMenu = computed(() => [
  {
    type: 'edit',
    label: t('common.edit'),
    icon: 'pi pi-pencil',
    command: () => {
      $router.push(`/event/form/${selectedId.value}`)
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

let products = [
  {
    id: 1000,
    activityName: 'Bamboo Watch',
    email: 'y7z9V@example.com',
    address: 'address',
    phone: '1234567890',
    abbreviationLetter: 'BW',
    legal: 'Legal',
    description: 'the Description',
    code: 'BW',
    country: 'India',
    initials: 'BW',
    date: '2019-01-01',
    nationality: 'India',
    flag: 'india.png',
    rating: 5,
    actions: 'edit, delete'
  },
  {
    id: 1001,
    activityName: 'Black Watch',
    email: 'y7z9V@example.com',
    address: 'address',
    phone: '1234567890',
    abbreviationLetter: 'BW',
    legal: 'Legal',
    description: 'the description',
    code: 'BW',
    country: 'India',
    initials: 'BW',
    date: '2019-01-01',
    nationality: 'India',
    flag: 'india.png',
    actions: 'edit, delete'
  },
  {
    id: 1002,
    activityName: 'Blue Band',
    email: 'y7z9V@example.com',
    address: 'address',
    phone: '1234567890',
    abbreviationLetter: 'BB',
    legal: 'Legal',
    description: 'the description',
    code: 'BW',
    country: 'India',
    initials: 'BB',
    date: '2019-01-01',
    nationality: 'India',
    flag: 'india.png',
    actions: 'edit, delete'
  }

]

function onRowClick(event) {
  router.push(`/events/show/${event.data.id}`)
}

</script>
