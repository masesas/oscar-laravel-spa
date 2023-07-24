<script setup>
import Navbar1 from "@/Components/GoogleAds/Navbar1.vue"
import Footer1 from "@/Components/GoogleAds/Footer1.vue"
import { Vue3Snackbar } from "vue3-snackbar";
import { Head } from "@inertiajs/vue3"


defineProps({
    namaBengkel: String
})

const emit = defineEmits(['voucher-click', 'fasilitas-click', 'foto-click', 'lokasi-click', 'show-snackbar'])

const voucherClick = (event) => {
    emit('voucher-click', event)
}

const fasilitasClick = (event) => {
    emit('fasilitas-click', event)
}

const fotoClick = (event) => {
    emit('foto-click', event)
}

const lokasiClick = (event) => {
    emit('lokasi-click', event)
}

</script>

<template>
    <div class="">
        <Head :title="namaBengkel" />
        <Navbar1 :title="namaBengkel" @voucher-click="voucherClick" @foto-click="fotoClick" @lokasi-click="lokasiClick"
                    @fasilitas-click="fasilitasClick" />
        <main class="flex-shrink-0">
            <slot />
            <Footer1 />
        </main>
        <Vue3Snackbar bottom right :duration="10000"></Vue3Snackbar>
    </div>
</template>
