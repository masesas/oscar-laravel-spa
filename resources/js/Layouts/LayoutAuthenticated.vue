<script setup>
import { useLayoutStore } from '@/Stores/layout.js'
import { useStyleStore } from '@/Stores/style.js'
import NavBar from '@/Components/NavBar.vue'
import AsideMenu from '@/Components/AsideMenu.vue'
import FooterBar from '@/Components/FooterBar.vue'
import { useSnackbar } from "vue3-snackbar";
import { Vue3Snackbar } from "vue3-snackbar";
import { onMounted } from 'vue'
import OverlayLayer from '@/Components/OverlayLayer.vue'
import { useScreenSize } from '../Composable/screen_size';

const styleStore = useStyleStore()

const layoutStore = useLayoutStore()

const { isMobile } = useScreenSize();

const snackbar = useSnackbar();

onMounted(() => {
    /* snackbar.add({
        type: 'success',
        text: 'This is a snackbar message'
    }) */
})

const overlayClickNavBar = () => {
    console.log('navbar')
}

const overlayClick = () => {
    layoutStore.isAsideExpanded = false
    layoutStore.isMobileMenuShow = false
}

</script>

<template>
    <div
        :class="{ 'dark': styleStore.darkMode, 'overflow-hidden lg:overflow-visible toggle-sidebar': layoutStore.isAsideExpanded }">
        <NavBar @overlay-click="overlayClickNavBar" />
        <AsideMenu />
        <main class="main text-bold dark:text-white dark:bg-slate-800" id="main">
            <OverlayLayer v-show="(layoutStore.isAsideExpanded || layoutStore.isMobileMenuShow) && isMobile"
                z-index="z-30" @overlay-click="overlayClick" />
            <slot />
        </main>
        <FooterBar />
        <vue3-snackbar bottom right :duration="4000"></vue3-snackbar>
    </div>
</template>
