<script setup>
import QRCodeVue3 from "qrcode-vue3";

const props = defineProps({
    value: {
        type: String,
        default: "https://otomotives.com"
    },
    desc: {
        type: String,
        default: "keterangan"
    }
})

const options = {}
</script>
<template>
    <div class="text-center">
        <div class="row row-cols-1">
            <div class="col">
                <QRCodeVue3 :value="value" :width="200" :height="200" :image="`${$baseAssets}/icon/bengkelPro.png`"
                :qrOptions="{ typeNumber: '0', mode: 'Byte', errorCorrectionLevel: 'Q' }"
                :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
                :dotsOptions="{ type: 'square', color: '#05004d' }"
                :cornersSquareOptions="{ type: 'square', color: '#0e013c' }" />
            </div>
            <div class="col">
                <p> {{ desc }} </p>
            </div>
        </div>
    </div>
</template>
