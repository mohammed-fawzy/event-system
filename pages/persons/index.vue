
<template>
  <div class="">
    <div class="flex justify-between items-center mb-10">
      <p class="font-medium text-blue10 text-xl capitalize">{{ $t(`sideMenu.${routerName}`)}}</p>
      <Button :label="$t('common.addNew')" icon="pi pi-plus" class="bg-primary text-base h-42" @click="$router.push({path :'/persons/form'})"/>
    </div>
      <DataTable :loading="pending" lazy paginator :value="data?.data?.rows" :totalRecords="data?.data?.meta.total" :rows="perPage" @page="handlePageChange" @row-click="onRowClick">
          <Column field="id" :header="$t('common.id')"></Column>
          <Column field="name" :header="$t('common.name')">
            <template #body="slotProps">
              <div class="flex items-center">
                <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="rounded-full block mr-4" alt="Image" width="32" />
                {{ slotProps.data.name }}
              </div>
            </template>
          </Column>
          <Column field="nationality" :header="$t('common.nationality')"></Column>
          <Column field="idType" :header="$t('table.idType')"></Column>
          <Column field="city" :header="$t('table.city')"></Column>
          <Column field="street" :header="$t('table.streetAddress')"></Column>
          <Column field="email" :header="$t('common.email')"></Column>
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
let routerName = computed(() => {
  return useRouter().currentRoute.value.name 
})

let perPage = ref(10);
let currentPage = ref(1);
const { pending, data, refresh } = useApi(`persons`, {
  params: {
    limit: perPage,
    page: currentPage
  },
});

// Event handler for page change
const handlePageChange = (event) => {
  currentPage.value = event.page + 1;
};
const toast = useToast();



const menu = ref();
const editDeleteMenu = computed(() => [
  {
    type: 'edit',
    label: t('common.edit'),
    icon: 'pi pi-pencil',
    command: () => {
      router.push({path :`/persons/form/${selectedId.value}`})
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
const confirm = useConfirm();
const deleteConfirm = () => {
  confirm.require({
    message: t('common.deleteConfirm'),
    header: t('common.delete'),
    rejectClass: 'p-button-text p-button-text bg-primary',
    acceptClass: 'p-button-danger p-button-text bg-red-500 text-white',
    acceptLabel: t('common.yes'),
    rejectLabel: t('common.no'),
    accept: () => {
      use$Fetch(`persons/${selectedId.value}`, { method: 'DELETE'}).then(() => {
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

const onRowClick = (event) => {
  // console.log('onRowClick', event.data);
  router.push({path :`/persons/show/${event.data.id}`})
}


</script>
