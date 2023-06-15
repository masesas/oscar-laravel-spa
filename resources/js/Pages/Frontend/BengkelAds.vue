<script setup>
import { ref, onMounted } from 'vue';
import { Head, Link, useForm, usePage } from "@inertiajs/vue3"
import BaseButton from '@/Components/BaseButton.vue';
import CardBox from "@/Components/CardBox.vue"
import FormField from '@/Components/FormField.vue'
import FormControl from '@/Components/FormControl.vue'
import BaseButtons from '@/Components/BaseButtons.vue'
import { mdiTicketPercent, mdiImage, mdiGoogleMaps, mdiCarCog } from '@mdi/js'
import BaseIcon from '@/Components/BaseIcon.vue';
import Waves from '@/Components/Waves.vue'
import { useSnackbar } from "vue3-snackbar";
import { Vue3Snackbar } from "vue3-snackbar";

const props = defineProps({
    bengkel: {
        type: Object,
        default: () => ({}),
    },
})

const snackbar = useSnackbar();

const form = useForm({
    _method: 'post',
    cid: '',
    noPonsel: '',
})

const { pathname } = window.location
const parseCid = (path) => path.substring(path.lastIndexOf('/') + 1)
const isLoading = ref(false)

function claimVoucher() {
    isLoading.value = true
    form.cid = parseCid(pathname)
    form.post(route('bengkel.ads.claim_voucher'), {
        preserveState: false,
        preserveScroll: true,
        onSuccess: () => {
            form.reset()
            isLoading.value = false
            //console.log('post', usePage().props.flash)
            if (usePage().props.flash.message)
            {
                snackbar.add({
                    type: usePage().props.flash.type,
                    text: usePage().props.flash.message,

                })
            }
        },
        onError: (error) => {
            snackbar.add({
                type: "error",
                text: error,

            })
        }
    })
}

const iframeGoogle = (alamat) => {
    return "https://maps.google.com/maps?q=" + alamat + "&t=&z=13&ie=UTF8&iwloc=&output=embed";
}
const alamatEncode = iframeGoogle(encodeURIComponent(props.bengkel.ALAMAT + ', ' + props.bengkel.KOTA_KABUPATEN + ' ' + props.bengkel.KODE_POS));

onMounted(() => {

})

</script>
<template>
    <div>
        <Head :title="props.bengkel.NAMA_BENGKEL" />
        <main class="flex-shrink-0">
            <nav class="navbar sticky-top navbar-expand-lg navbar-light gradient-primary card shadow">
                <div class="container px-md-5">
                    <a class="navbar-brand fw-bolder d-flex align-items-center" href="#!">
                        <img class="logo" :src="$baseAssets + '/icon/bengkelPro.png'" />
                        <span class="mx-3 text-primary">{{ props.bengkel.NAMA_BENGKEL }}</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"><span
                            class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link inline-icon fw-bold" href="#voucher">
                                    <BaseIcon :path="mdiTicketPercent" />
                                    <span class="">Voucher</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link inline-icon fw-bold" href="#fasilitas">
                                    <BaseIcon :path="mdiCarCog" />
                                    <span>Fasilitas Bengkel</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link inline-icon fw-bold" href="#foto">
                                    <BaseIcon :path="mdiImage" />
                                    <span>Foto Bengkel</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link inline-icon fw-bold" href="#lokasi">
                                    <BaseIcon :path="mdiGoogleMaps" />
                                    <span>Lokasi Bengkel</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Waves class="rotate-180" />
            <section id="voucher" class="p-3 m-2">
                <div class="container">
                    <div class="row gx-4 gx-lg-5 align-items-center my-5">
                        <div class="col-lg-7">
                            <img class="card shadow-lg rounded-lg img-fluid rounded mb-4 mb-lg-0"
                                :src="$baseAssets + '/banner/ads/banner_ads_sengkaling_md.png'" alt="..." />
                        </div>
                        <div class="col-lg-5">
                            <h1 class="fw-bolder text-center mb-3">Dapatkan Voucher Diskon Servis Dengan Memasukkan No.
                                Ponsel
                            </h1>
                            <a class="btn btn-primary rounded-full w-100" href="#input-no-ponsel">Klaim Voucher Servis
                                Sekarang!</a>
                        </div>
                    </div>
                </div>
            </section>
            <Waves />
            <section id="fasilitas" class="section colored mb-3 p-5">
                <div class="container">
                    <div class="row text-center mt-5 my-3">
                        <div class="col-lg-12">
                            <h2 class="display-5 fw-bolder text-center text-black">
                                Fasilitas {{ props.NAMA_BENGKEL }}
                            </h2>
                        </div>
                        <div class="col-lg-12">
                            <h5>Nikmati Kenyamanan dengan Fasilitas yg ada di {{ props.bengkel.NAMA_BENGKEL }}</h5>
                        </div>
                    </div>
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-12 col-md-12 d-flex justify-content-center">
                            <img class="card shadow-lg rounded-lg img-fluid rounded mb-4 mb-lg-0"
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
                            <h5>Foto Bengkel {{ props.bengkel.NAMA_BENGKEL }}</h5>
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
                                    <iframe :src="alamatEncode" height="350" width="100%" allowfullscreen=""
                                        loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section colored section-overlay" id="input-no-ponsel">
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
            <footer class="bg-white py-4 mt-auto">
                <div class="container px-5">
                    <div class="text-center">
                        <div class="small m-0">Copyright &copy; <a href="https://otomotives.com"
                                class="text-decoration-none">otomotives 2023</a></div>
                    </div>
                </div>
            </footer>
            <vue3-snackbar bottom right :duration="10000"></vue3-snackbar>
        </main>
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
</style>
