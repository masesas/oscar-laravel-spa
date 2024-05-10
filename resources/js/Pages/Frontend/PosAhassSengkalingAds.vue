<script setup>
import { useScreenSize } from '../../Composable/screen_size'
import { BIconWhatsapp } from 'bootstrap-icons-vue'
import Footer1 from "@/Components/GoogleAds/Footer1.vue"

const props = defineProps({
    bengkel: {
        type: Object,
        default: () => ({}),
    },
})

const { isMobile } = useScreenSize();

const iframeGoogle = (alamat) => {
    return "https://maps.google.com/maps?q=" + alamat + "&t=&z=13&ie=UTF8&iwloc=&output=embed";
}

const alamatEncode = iframeGoogle(encodeURIComponent(props.bengkel.ALAMAT + ', ' + props.bengkel.KOTA_KABUPATEN + ' ' + props.bengkel.KODE_POS));

const waLink = () => {
    const message = 'Halo mimin Ahass Sengkaling, Aku mau tau detail bisnis bengkel resmi Ahass dong!'
    return `https://api.whatsapp.com/send?phone=${props.bengkel.NO_PONSEL}&text=${message}`
}

</script>
<template>
    <div class="position-relative">
        <!-- <h3 class="text-center my-3">POS Bengkel Ahass Sengkaling</h3> -->
        <section class="mb-3">
            <div class="justify-content-center align-items-center" :class="{ 'banner': isMobile }">
                <div
                    :class="{ 'd-flex align-items-center justify-content-center': !isMobile, 'card shadow-lg rounded-lg': isMobile }">
                    <img class="img-fluid" :src="isMobile ? $baseAssets + '/banner/ads/pos/Pos-Ahass-Sengkaling-860-1640.png'
                        : $baseAssets + '/banner/ads/pos/Pos-Ahass-Sengkaling.png'" alt="banner" />
                </div>
            </div>
        </section>
        <section id="lokasi" class="bg-light py-5">
            <div class="container" data-aos="fade-right" data-aos-once="true">
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
        <section>
            <!-- <div>
                <a :href="waLink()" class="btn-wa" target="_blank">
                    <BIconWhatsapp class="icon-wa" />
                    <button class="wh-ap-btn"></button>
                </a>
            </div> -->
            <div class="wh-api">
                <div class="position-relative">
                    <div class="wh-fixed whatsapp-pulse">
                        <a :href="waLink()" class="" target="_blank">
                            <button class="wh-ap-btn" @mouseover="showHubungi = true" @mouseleave="showHubungi = false">
                            </button>
                            <BIconWhatsapp class="icon" height="25" width="25" />
                        </a>
                    </div>
                    <!-- <div class="position-absolute hubungi" :style="{ opacity: showHubungi ? '1' : '0' }">
                        <span>Hubungi Kami</span>
                    </div> -->
                </div>
            </div>
        </section>
        <Footer1 />
    </div>
</template>
<style scoped>
.icon {
    position: absolute;
    z-index: 9999;
    right: 16px;
    color: #fff;
    margin-top: 18px;
}

button.wh-ap-btn {
    outline: none;
    width: 60px;
    height: 60px;
    border: 0;
    background-color: #2ecc71;
    color: #FFF;
    border-radius: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    cursor: pointer;
    transition: opacity 0.3s, background 0.3s, box-shadow 0.3s;
}

button.wh-ap-btn::after {
    content: "";
    background-image: url("//i.imgur.com/cAS6qqn.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 60%;
    width: 100%;
    height: 100%;
    display: block;
    opacity: 1;
}

button.wh-ap-btn:hover {
    opacity: 1;
    background-color: #20bf6b;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.wh-api {
    position: fixed;
    bottom: 0;
    right: 0;
}

.wh-fixed {
    margin-right: 15px;
    margin-bottom: 15px;
}

.wh-fixed>a {
    display: block;
    text-decoration: none;
}

/* animacion pulse */

.whatsapp-pulse {
    width: 60px;
    height: 60px;
    right: 10px;
    bottom: 10px;
    background: #10b418;
    position: fixed;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    border-radius: 50%;
    z-index: 99;
    display: inline-block;
    line-height: 65px;
}

.whatsapp-pulse:before {
    position: absolute;
    content: " ";
    z-index: -1;
    bottom: -15px;
    right: -15px;
    background-color: #10b418;
    width: 90px;
    height: 90px;
    border-radius: 100%;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
    opacity: 0.6;
    -webkit-animation: pulse 1s ease-out;
    animation: pulse 1.8s ease-out;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
}

@-webkit-keyframes pulse {
    0% {
        -webkit-transform: scale(0);
        opacity: 0;
    }

    25% {
        -webkit-transform: scale(0.3);
        opacity: 1;
    }

    50% {
        -webkit-transform: scale(0.6);
        opacity: 0.6;
    }

    75% {
        -webkit-transform: scale(0.9);
        opacity: 0.3;
    }

    100% {
        -webkit-transform: scale(1);
        opacity: 0;
    }
}

@keyframes pulse {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    25% {
        transform: scale(0.3);
        opacity: 1;
    }

    50% {
        transform: scale(0.6);
        opacity: 0.6;
    }

    75% {
        transform: scale(0.9);
        opacity: 0.3;
    }

    100% {
        transform: scale(1);
        opacity: 0;
    }
}
</style>
