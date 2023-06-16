<script setup>
import {
    mdiTicketPercent,
    mdiImage,
    mdiGoogleMaps,
    mdiCarCog
} from '@mdi/js'
import BaseIcon from '../BaseIcon.vue';


const props = defineProps({
    title: {
        type: String,
        default: "Nama Bengkel",
    }
})

const emit = defineEmits(['voucher-click', 'fasilitas-click', 'foto-click', 'lokasi-click'])

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
    <nav class="navbar sticky-top navbar-expand-lg navbar-light gradient-primary card shadow">
        <div class="container px-md-5">
            <a class="navbar-brand fw-bolder d-flex align-items-center" href="#!">
                <img class="logo" :src="$baseAssets + '/icon/bengkelPro.png'" />
                <span class="mx-3 text-primary">{{ props.title }}</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                    class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link inline-icon fw-bold" href="#" @click.prevent="voucherClick">
                            <BaseIcon :path="mdiTicketPercent" />
                            <span class="">Voucher</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link inline-icon fw-bold" href="#" @click.prevent="fasilitasClick">
                            <BaseIcon :path="mdiCarCog" />
                            <span>Fasilitas Bengkel</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link inline-icon fw-bold" href="#" @click.prevent="fotoClick">
                            <BaseIcon :path="mdiImage" />
                            <span>Foto Bengkel</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link inline-icon fw-bold" href="#" @click.prevent="lokasiClick">
                            <BaseIcon :path="mdiGoogleMaps" />
                            <span>Lokasi Bengkel</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
