<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { router } from '@inertiajs/vue3';
import { useForm, usePage, Head } from "@inertiajs/vue3"
import Waves from '@/Components/Waves.vue'
import { useSnackbar } from "vue3-snackbar";
import { useClaimVoucherStore } from "@/Stores/claimVoucher.js"
import LayoutGoogleAds1 from '@/Layouts/LayoutGoogleAds1.vue';
import { logging } from "@/Utils/logging"
import { getLastPathUrl } from "@/Utils/url"
//import IClaimVoucherRequest from "@/Apis/Request/IClaimVoucherRequest"
import { storeToRefs } from 'pinia'
import { event } from 'vue-gtag'
import ModalQRCodeVoucher from '@/Components/ModalQRCodeVoucher.vue';
import { ucwords } from '@/Utils/formating-utils';
import Caraousel from "@/Components/Caraousel.vue"
import { useScreenSize } from '../../Composable/screen_size';
import { moveWaApi } from '@/Utils/url';

const props = defineProps({
    bengkel: {
        type: Object,
        default: () => ({}),
    },
})

const snackbar = useSnackbar();

const claimVoucherStore = useClaimVoucherStore()

const { responseMessage } = storeToRefs(claimVoucherStore)

const isLoading = computed(() => claimVoucherStore.isLoading)

const namaBengkel = computed(() => {
    return ucwords(props.bengkel.NAMA_BENGKEL.toLowerCase());
})

const loadingClaim = ref(false);
const qrValue = ref('')
const doneClaim = ref(false)
const countClaim = ref(0)
const tglExpiredVoucher = ref('')

const { isMobile } = useScreenSize();

watch(
    () => claimVoucherStore.responseMessage,
    () => {
        if (claimVoucherStore.responseMessage)
        {
            snackbar.add({
                type: claimVoucherStore.isError ? 'error' : 'success',
                text: claimVoucherStore.responseMessage,
            })

            event('conversion', { 'send_to': 'AW-11226084301/vHVnCNDn9K0YEM3ngekp' })
        }
    }
)
/* claimVoucherStore.$subscribe((mutation, state) => {
    if (state.responseMessage) {
        snackbar.add({
            type: claimVoucherStore.isError ? 'error' : 'success',
            text: claimVoucherStore.responseMessage,
        })
    }
}) */

/* const form = useForm({
    _method: 'post',
    cid: '',
    noPonsel: '',
}) */

//const requestClaimVoucher = ref<IClaimVoucherRequest | null>(null)

const form = ref({
    cid: '',
    noPonsel: '',
    namaLayanan: 'SERVIS LENGKAP + CUCI'
})

let modalVoucher = ref(null)

const iframeGoogle = (alamat) => {
    return "https://maps.google.com/maps?q=" + alamat + "&t=&z=13&ie=UTF8&iwloc=&output=embed";
}
const alamatEncode = iframeGoogle(encodeURIComponent(props.bengkel.ALAMAT + ', ' + props.bengkel.KOTA_KABUPATEN + ' ' + props.bengkel.KODE_POS));

const voucherClick = () => {
    document.getElementById('voucher').scrollIntoView()
}

const fotoClick = () => {
    document.getElementById('foto').scrollIntoView()
}

const fasilitasClick = () => {
    document.getElementById('fasilitas').scrollIntoView()
}

const lokasiClick = () => {
    document.getElementById('lokasi').scrollIntoView()
}

function claimVoucher() {
    form.value.cid = getLastPathUrl()
    claimVoucherStore.submit(form.value)
}

function showVoucher() {
    router.post(route('bengkel.ads.claim_voucher'), { cid: props.bengkel.CID }, {
        preserveScroll: true,
        onStart: (page) => {
            loadingClaim.value = true
        },
        onFinish: (page) => {
            loadingClaim.value = false
        },
        onSuccess: (page) => {
            //console.log('success', page.props)
            countClaim.value += 1
            qrValue.value = page.props.flash.data.qr
            tglExpiredVoucher.value = page.props.flash.data.tglExpired
            doneClaim.value = true

            snackbar.add({
                type: 'success',
                text: page.props.flash.message
            })

            modalVoucher.value.show(page.props.flash.data.qr, page.props.flash.data.linkQr)
        },
        onError: (errors) => {
            console.log('error', erros);
            snackbar.add({
                type: 'error',
                text: Object.values(errors).join("\n")
            })
        },
    })
}

function moveWa() {
    moveWaApi(props.bengkel.NO_PONSEL)
}

const assets = process.env.NODE_ENV != 'production' ? '/img' : 'https://otomotives.com/oscar/img';
const items = [
    assets + '/review-sengkaling/1.jpeg',
    assets + '/review-sengkaling/2.jpeg',
    assets + '/review-sengkaling/3.jpeg',
    assets + '/review-sengkaling/4.jpeg',
    assets + '/review-sengkaling/5.jpeg',
    assets + '/review-sengkaling/6.jpeg',
    assets + '/review-sengkaling/7.jpeg',
    assets + '/review-sengkaling/8.jpeg',
    assets + '/review-sengkaling/9.jpeg',
];

onMounted(() => {

})

</script>
<template>
    <div>

        <Head>
            <title>{{ namaBengkel }}</title>
            <meta head-key="description" name="description" :content="'Bengkel ' + ucwords(props.bengkel.NAMA_BENGKEL)" />
            <link rel="icon" type="image/svg+xml" :href="props.bengkel.LOGO" />
        </Head>
        <LayoutGoogleAds1 :namaBengkel="namaBengkel" @voucher-click="voucherClick" @foto-click="fotoClick"
            @lokasi-click="lokasiClick" @fasilitas-click="fasilitasClick">
            <Waves class="rotate-180" />
            <section id="voucher" class="PY-2">
                <div class="container">
                    <div class="row row-cols-1 justify-content-center align-items-center">
                        <div class="col mb-3">
                            <div class="banner justify-content-center align-items-center">
                                <div class="card shadow-lg rounded-lg">
                                    <img class="img-fluid" :src="isMobile ? $baseAssets + '/banner/ads/disc_2_600_1200.png'
                                        : $baseAssets + '/banner/ads/disc_2_600_700.png'" alt="banner" />
                                    <div v-if="loadingClaim" class="loading">
                                        <div class="spinner-border text-white"></div>
                                    </div>
                                </div>
                                <a href="#" class="claim" @click.prevent="showVoucher"></a>
                                <a href="#" class="address text-white" @click.prevent="lokasiClick">
                                    {{ bengkel.ALAMAT }}
                                </a>
                                <a href="#" class="ponsel text-white" target="_blank" @click.prevent="moveWa">
                                    +{{ bengkel.NO_PONSEL }}
                                </a>
                            </div>
                        </div>
                        <div class="col mt-5">
                            <Caraousel class="" :items="items" />
                        </div>
                    </div>
                </div>
            </section>
            <Waves />
            <section id="fasilitas" class="section colored mb-3 p-2">
                <div class="container">
                    <div class="row text-center mt-5 my-3">
                        <div class="col-lg-12">
                            <h2 class="display-5 fw-bolder text-center text-black">
                                Fasilitas {{ namaBengkel }}
                            </h2>
                        </div>
                        <div class="col-lg-12">
                            <h5>Nikmati Kenyamanan dengan Fasilitas yg ada di {{ namaBengkel }}</h5>
                        </div>
                    </div>
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-12 col-md-12 d-flex justify-content-center">
                            <img class="card shadow-lg rounded-lg img-big rounded mb-4 mb-lg-0"
                                :src="$baseAssets + '/banner/keuntungan_ahass_sengkaling_medium.png'" alt="..." />
                        </div>
                    </div>
                </div>
            </section>
            <section id="foto" class="bg-light py-5">
                <div class="container">
                    <div class="row text-center mt-5 my-3">
                        <div class="col-lg-12">
                            <h2 class="display-5 fw-bolder text-center text-black">
                                Foto Bengkel
                            </h2>
                        </div>
                        <div class="col-lg-12">
                            <h5>Foto Bengkel {{ namaBengkel }}</h5>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center">
                        <div class="row align-items-center justify-content-center text-center">
                            <div v-if="props.bengkel.FOTO_DEPAN" class="col-lg-3 col-md-3 col-sm-3 mb-4 mb-md-0">
                                <div class="card shadow">
                                    <div class="card-img-top">
                                        <img :src="props.bengkel.FOTO_DEPAN" class="foto" />
                                    </div>
                                    <div class="card-body">
                                        <span class="card-text fw-bold">Foto Area Depan</span>
                                    </div>
                                </div>
                            </div>
                            <div v-if="props.bengkel.FOTO_AREA_SERVIS" class="col-md-3 col-sm-3 mb-4 mb-md-0">
                                <div class="card shadow">
                                    <div class="card-img-top">
                                        <img :src="props.bengkel.FOTO_AREA_SERVIS" class="foto" />
                                    </div>
                                    <div class="card-body">
                                        <span class="card-text fw-bold">Foto Area Servis</span>
                                    </div>
                                </div>
                            </div>
                            <div v-if="props.bengkel.FOTO_AREA_TUNGGU" class="col-md-3 col-sm-3 col-12 mb-4 mb-md-0">
                                <div class="card shadow">
                                    <div class="card-img-top">
                                        <img :src="props.bengkel.FOTO_AREA_TUNGGU" class="foto" />
                                    </div>
                                    <div class="card-body">
                                        <span class="card-text fw-bold">Foto Area Tunggu</span>
                                    </div>
                                </div>
                            </div>
                            <div v-if="props.bengkel.FOTO_AREA_KASIR" class="col-md-3 col-sm-3 col-12 mb-4 mb-md-0">
                                <div class="card shadow">
                                    <div class="card-img-top">
                                        <img :src="props.bengkel.FOTO_AREA_KASIR" class="foto" />
                                    </div>
                                    <div class="card-body">
                                        <span class="card-text fw-bold">Foto Area Kasir</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="lokasi" class="bg-light py-5">
                <div class="container">
                    <div class="row text-center my-3">
                        <div class="col-lg-12">
                            <h2 class="display-5 fw-bolder text-center">
                                Lokasi Bengkel
                            </h2>
                        </div>
                        <div class="col-lg-12">
                            <h5>{{ props.bengkel.ALAMAT }}</h5>
                        </div>
                        <div class="col-lg-12">
                            <div class="col-md-12 col-lg-12 mt-3">
                                <div class="card rounded shadow">
                                    <iframe :src="alamatEncode" height="350" width="100%" allowfullscreen
                                        loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- <section class="section colored section-overlay">
                <div class="container">
                    <div class="row row-cols-1 align-items-center d-flex justify-content-center text-center">
                        <div v-if="bengkel.LOGO" class="col mb-4">
                            <img :src="bengkel.LOGO" width="100" height="100" alt="logo bengkel" />
                        </div>
                        <div class="col">
                            <p><strong>{{ namaBengkel }}</strong> Memberikan Diskon Servis Buat Kamu Secara
                                <strong>Gratis</strong> Untuk Perawatan
                                Kendaraan Mu Agar Pengalaman Berkendara Mu Semakin Nyaman dan Aman!
                            </p>
                        </div>
                        <div class="col">
                            <button type="button" class="btn main-button w-100" @click.prevent="showVoucher"
                                :disabled="loadingClaim">
                                <span v-if="loadingClaim" class="spinner-border text-white"></span>
                                <span v-else>Dapatkan Diskon Servis Sekararang Juga!</span>
                            </button>
                        </div>
                        <div v-if="doneClaim" class="col">
                            <p class="text-info">*Kamu sudah klaim diskon vocuher sebanyak x{{ countClaim }} </p>
                        </div>
                    </div>
                </div>
            </section> -->
            <section v-if="false" class="section colored section-overlay" id="input-no-ponsel">
                <div v-if="isLoading" class="overlay-loading d-flex align-items-center justify-content-center">
                    <div class="spinner-border text-primary md">
                    </div>
                </div>
                <div class="container">
                    <div class="row mb-3">
                        <div class="col-lg-12">
                            <div class="center-heading">
                                <h2 class="section-title fw-bolder">Masukkan No. Ponsel</h2>
                            </div>
                        </div>
                        <div class="offset-lg-3 col-lg-6">
                            <div class="text-center">
                                <p>Voucher Akan di Kirimkan Ke Whatsapp berupa pesan dan link Barcode Diskon</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <h5 class="margin-bottom-30">Catatan : </h5>
                            <div class="contact-text">
                                <p>
                                    Tunjukkan Barcode Kepada Kasir Saat Melakukan Servis Kendaraan Mu di Bengkel {{
                                        props.bengkel.NAMA_BENGKEL }}
                                </p>
                                <p>
                                    Voucher hanya berlaku jika kamu melakukan servis di Bengkel {{
                                        props.bengkel.NAMA_BENGKEL }}
                                    dengan menggunakan No. Ponsel yg sama ketika kamu memasukkannya
                                </p>
                            </div>
                        </div>
                        <!-- ***** Contact Text End ***** -->

                        <!-- ***** Contact Form Start ***** -->
                        <div class="col-lg-8 col-md-6 col-sm-12">
                            <div class="contact-form">
                                <form id="contact" @submit.prevent="claimVoucher">
                                    <div class="row">
                                        <div class="col-lg-8 col-md-12 col-sm-12">
                                            <fieldset>
                                                <input v-model="form.noPonsel" type="text" class="form-control"
                                                    id="no-ponsel" placeholder="No. Ponsel"
                                                    onkeypress="return event.keyCode === 8 || event.charCode >= 48 && event.charCode <= 57"
                                                    required>
                                            </fieldset>
                                        </div>
                                        <div class="col-lg-4 col-md-12 col-sm-12">
                                            <fieldset>
                                                <button type="submit" id="form-submit" class="btn main-button w-md-100">
                                                    Klaim Voucher
                                                </button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- ***** Contact Form End ***** -->
                    </div>
                </div>
            </section>
            <ModalQRCodeVoucher ref="modalVoucher"
                :qr-desc="`Diskon Servis 20% di ${namaBengkel}\nGunakan Diskon Sebelum Tanggal ${tglExpiredVoucher}`"
                :data-bengkel="bengkel">
                <template #content>
                    <p class="text-muted">
                        *Salin Link atau Screenshot Voucher Diskon
                    </p>
                </template>
            </ModalQRCodeVoucher>
        </LayoutGoogleAds1>
    </div>
</template>

<style lang="css" scoped>
header.masthead {
    padding-top: 10rem;
    padding-bottom: calc(10rem - 4.5rem);
    background: linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url("https://otomotives.com/app/images/bengkel/0ae85b7d-d843-11eb-b18a-2cea7f647529/FotoBengkel/Depan-2023-03-30-06:23:24-AHASS-SENGKALING.png");
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
}

.banner {
    width: 100% !important;
    height: 100% !important;
    position: relative;
}

.banner .loading {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    opacity: 0.7;
    height: 100%;
    width: 100%;
    background-color: rgb(173, 122, 173);
}


@media only screen and (min-width: 320px) {

    .banner .claim {
        position: absolute;
        bottom: 2%;
        right: 0;
        padding: 3% 2%;
        font-size: 0.8rem;
        width: 35%;
        height: 10%;
    }

    .banner .address {
        position: absolute;
        display: flex;
        justify-content: end;
        bottom: 10.5%;
        left: 21%;
        font-size: 0.65rem;
        width: 40%;
        height: auto;
    }

    .banner .ponsel {
        position: absolute;
        display: flex;
        justify-content: end;
        bottom: 4.2%;
        left: 21%;
        font-size: 0.65rem;
        width: auto;
        height: auto;
    }
}

@media only screen and (min-width : 810px) {
    .banner .address {
        position: absolute;
        display: flex;
        justify-content: end;
        bottom: 9%;
        left: 16%;
        font-size: 0.65rem;
        width: 20%;
        height: auto;
    }

    .banner .ponsel {
        position: absolute;
        display: flex;
        justify-content: end;
        bottom: 4%;
        left: 16%;
        font-size: 0.65rem;
        width: auto;
        height: auto;
    }
}

/* big landscape tablets, laptops, and desktops */
@media (min-width: 1025px) or (min-width: 1281px) {
    .banner {
        position: relative;
    }

    .banner .claim {
        position: absolute;
        bottom: 2%;
        right: 0;
        padding: 3% 2%;
        font-size: 0.8rem;
        width: 35%;
        height: 10%;
    }

    .banner .address {
        position: absolute;
        display: flex;
        justify-content: end;
        bottom: 10.5%;
        left: 15%;
        font-size: 0.8rem;
        width: auto;
        height: auto;
    }

    .banner .ponsel {
        position: absolute;
        display: flex;
        justify-content: end;
        bottom: 3.8%;
        left: 15%;
        font-size: 0.8rem;
        width: auto;
        height: auto;
    }
}
</style>
