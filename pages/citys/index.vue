
<template>
  <div class="">
    <div class="flex justify-between items-center mb-10">
      <p class="font-medium text-blue10 text-xl capitalize">{{ $t(`sideMenu.${routerName}`)}}</p>
      <Button :label="$t('common.addNew')" icon="pi pi-plus" class="bg-primary text-base h-42" @click="visible = true"/>
    </div>
      <DataTable :loading="pending" lazy paginator :value="data?.data?.rows" :totalRecords="data?.data?.meta.total" :rows="perPage" @page="handlePageChange">
          <Column field="id" :header="$t('common.id')"></Column>
          <Column field="name" :header="$t('common.name')"></Column>
          <Column field="code" :header="$t('common.code')"></Column>
          <Column field="initials" :header="$t('table.initials')"></Column>
          <Column field="country" :header="$t('common.country')"></Column>
          <Column field="date" :header="$t('common.date')"></Column>
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
  <Form v-if="visible" @close-modal="closeModal" :id="selectedId" @submit="refresh"/>
  <ConfirmDialog></ConfirmDialog>
</template>

<script setup>
const Form = defineAsyncComponent(() => import('./form.vue'))

const { t } = useI18n();


let perPage = ref(10);
let currentPage = ref(1);
const { pending, data, refresh } = useApi(`cities`, {
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
        use$Fetch(`cities/${selectedId.value}`, { method: 'DELETE'}).then(() => {
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

</script>
