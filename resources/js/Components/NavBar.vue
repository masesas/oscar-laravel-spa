<script setup>
import { usePage, router } from '@inertiajs/vue3'
import { computed, ref, onMounted } from 'vue'
import { containerMaxW } from '@/config.js'
import { useMainStore } from '@/Stores/main.js'
import { useStyleStore } from '@/Stores/style.js'
import { useLayoutStore } from '@/Stores/layout.js'
import {
    mdiForwardburger,
    mdiBackburger,
    mdiClose,
    mdiDotsVertical,
    mdiMenu,
    mdiClockOutline,
    mdiCloud,
    mdiCrop,
    mdiAccount,
    mdiCogOutline,
    mdiEmail,
    mdiLogout,
    mdiGithub,
    mdiThemeLightDark
} from '@mdi/js'
import NavBarItem from '@/Components/NavBarItem.vue'
import NavBarItemLabel from '@/Components/NavBarItemLabel.vue'
import NavBarMenu from '@/Components/NavBarMenu.vue'
import BaseDivider from '@/Components/BaseDivider.vue'
import UserAvatarCurrentUser from '@/Components/UserAvatarCurrentUser.vue'
import BaseIcon from '@/Components/BaseIcon.vue'
import NavBarSearch from '@/Components/NavBarSearch.vue'
import { useScreenSize } from '../Composable/screen_size';

const mainStore = useMainStore()

const userName = computed(() => usePage().props.auth.user.name)

const { isMobile } = useScreenSize();

const styleStore = useStyleStore()

const toggleLightDark = () => {
    styleStore.setDarkMode(!styleStore.darkMode);
}

const layoutStore = useLayoutStore()

const isMenuNavBarActive = ref(false)

const menuNavBarToggle = () => {
    //isMenuNavBarActive.value = !isMenuNavBarActive.value
    layoutStore.menuShow()
}

const logout = () => {
    router.post(route('logout'))
}

const emit = defineEmits(['overlay-click'])

const overlayClick = event => {
    emit('overlay-click', event)
}

</script>

<template>
    <header class="header fixed-top flex items-center dark:bg-slate-800" @click="overlayClick">
        <div class="flex items-center top-0 bottom-0 ">
            <a href="" class="logo d-flex items-center">
                <!-- <img src="assets/img/logo.png" alt=""> -->
                <span class="d-none d-lg-block dark:text-white">OSCAR WEB</span>
            </a>
            <button class="toggle-sidebar-btn flex items-center md:ml-3 sm:ml-3 dark:text-white"
                @click.prevent="layoutStore.asideToggle()">
                <BaseIcon :path="layoutStore.isAsideExpanded ? mdiForwardburger : mdiBackburger" size="50" />
            </button>
        </div>
        <div class="flex ms-auto lg:hidden">
            <NavBarItem @click.prevent="menuNavBarToggle">
                <BaseIcon :path="layoutStore.isMobileMenuShow ? mdiClose : mdiDotsVertical" size="24" />
            </NavBarItem>
        </div>
        <div class="md:ms-auto">
            <nav class="absolute w-screen top-14 left-0 bg-gray-50 shadow lg:w-auto lg:items-stretch lg:flex lg:grow lg:static lg:border-b-0 lg:overflow-visible lg:shadow-none dark:bg-slate-800"
                :class="[layoutStore.isMobileMenuShow || !isMobile ? 'block' : 'hidden']">
                <ul class="flex items-center px-2 py-2">
                    <NavBarMenu>
                        <NavBarItemLabel :label="userName" class="w-screen lg:w-min">
                            <UserAvatarCurrentUser class="w-6 h-6 mr-3 inline-flex" />
                        </NavBarItemLabel>

                        <template #dropdown>
                            <BaseDivider class="block lg:hidden" />
                            <NavBarItem @click.prevent="toggleLightDark" class="w-screen lg:w-min">
                                <NavBarItemLabel :icon="mdiThemeLightDark" label="Light/Dark" />
                            </NavBarItem>
                        </template>
                    </NavBarMenu>
                </ul>
            </nav>
        </div>
    </header>
</template>
