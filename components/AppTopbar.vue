<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from '@/layouts/composables/layout';
import { useRouter } from 'vue-router';
import USA from '@/assets/images/flag/USA.png';
import KSA from '@/assets/images/flag/ksa.png';
const route = useRoute()

const { locale, setLocale } = useI18n()

// setLocale("ar-EG")


const { layoutConfig, onMenuToggle } = useLayout();

const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
const router = useRouter();

onMounted(() => {
    bindOutsideClickListener();
});

onBeforeUnmount(() => {
    unbindOutsideClickListener();
});


const onTopBarMenuButton = () => {
    topbarMenuActive.value = !topbarMenuActive.value;
};
const onSettingsClick = () => {
    topbarMenuActive.value = false;
    router.push('/documentation');
};
const topbarMenuClasses = computed(() => {
    return {
        'layout-topbar-menu-mobile-active': topbarMenuActive.value
    };
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                topbarMenuActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event) => {
    if (!topbarMenuActive.value) return;

    const sidebarEl = document.querySelector('.layout-topbar-menu');
    const topbarEl = document.querySelector('.layout-topbar-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};

const storedLang = useCookie('language', null)
storedLang.value = storedLang.value || 'en-US';
const countries = ref([
    { name: 'USA', code: 'US', lang: 'en-US', img : USA },
    { name: 'KSA', code: 'SA', lang: 'ar-EG', img: KSA },
]);
const selectedCountry = ref( countries.value.find(c => c.lang === storedLang.value) || countries.value[0] );
setLocale(storedLang.value)
console.log(storedLang.value, 'selectedCountry')

function onChangeLanguage () {
    if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('lang', selectedCountry.value.lang);    
    }
    console.log(selectedCountry.value.lang)
    setLocale(selectedCountry.value.lang)

    if (selectedCountry.value.lang === 'ar-EG') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }

    if (storedLang.value !== selectedCountry.value.lang) {
        storedLang.value = selectedCountry.value.lang;
    }
    

}
</script>

<template>
    <div class="layout-topbar">

        <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
            <i class="pi pi-bars"></i>
        </button>

        <button class="p-link layout-topbar-menu-button layout-topbar-button" @click="onTopBarMenuButton()">
            <i class="pi pi-ellipsis-v"></i>
        </button>

        <div>
            <p class="font-medium text-blue10 capitalize">{{ route.name }}</p>
        </div>

        <IconField iconPosition="right">
            <InputIcon>
                <i class="pi pi-search text-blue4" />
            </InputIcon>
            <InputText v-model="value1" placeholder="Search" class="h-10 rounded-xl placeholder:text-blue4 placeholder:font-normal"/>
        </IconField>

        <div class="layout-topbar-menu" :class="topbarMenuClasses">
            <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                <i class="pi pi-user"></i>
                <span>Profile</span>
            </button>
            <button @click="onSettingsClick()" class="p-link layout-topbar-button">
                <i class="pi pi-cog"></i>
                <span>Settings</span>
            </button>
            <button class="p-link layout-topbar-button">
                <i class="pi pi-sign-out"></i>
            </button>
            <!-- change language with flag-->

             <Dropdown v-model="selectedCountry" @change="onChangeLanguage" :options="countries" optionLabel="name" class="change-lanuage w-full md:w-[7rem] border-0 p-0 items-center ring-offset-0">
            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex items-center">
                    <img :alt="slotProps.value.label" :src="slotProps.value.img" :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 20px; height: 13.4px" />
                    <!-- <div>{{ slotProps.value.name }}</div> -->
                </div>
                <span v-else>
                    {{ slotProps.placeholder }}
                </span>
            </template>
            <template #option="slotProps">
                <div class="flex items-center">
                    <img :alt="slotProps.option.label" :src="slotProps.option.img" :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 20px; height: 13.4px" />
                    <!-- <div>{{ slotProps.option.name }}</div> -->
                </div>
            </template>
        </Dropdown>

        <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">{{
    locale.name
  }}</NuxtLink>
</div>
</div>
</template>
<style lang="scss" scoped></style>
