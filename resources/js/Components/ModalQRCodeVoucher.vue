<script setup>
import { ref } from 'vue';
import BootstrapModal from '@/Components/BootstrapModal.vue';
//import QRCodeVue3 from "qrcode-vue3";
import QRCode from '@/Components/QRCode.vue';
import html2canvas from 'html2canvas'

const props = defineProps({
    qrValue: {
        type: String,
        required: true,
    },
    qrDesc: {
        type: String,
        required: true,
    },
    dataBengkel: {
        type: Object,
        required: true,
    }
})

let modalVoucher = ref(null);

function _show() {
    modalVoucher.value.show();
}

function downloadQr() {
    html2canvas(document.querySelector("#voucher-qr"), {
        allowTaint: true,
        letterRendering: 1,
        useCors: true,
        scale: 2,
        //width: 300,
        //height: 300,


    }).then(canvas => {
        const imgUrl = canvas.toDataURL('image/png');
        const image = document.createElement('img')
        image.src = imgUrl
        image.crossOrigin = 'anonymous';

        document.querySelector('.content').appendChild(image)

        const a = document.createElement('a')
        a.href = imgUrl
        a.download = props.qrDesc
        a.click()
    })
}


defineExpose({ show: _show })
</script>
<template>
    <div>
        <BootstrapModal title="Voucher Diskon Servis" ref="modalVoucher" :show-header="false" :show-footer="false">
            <template #body>
                <div class="container">
                    <div class="row row-cols-1 justify-content-center text-center py-3">
                        <div class="col mb-4 d-flex justify-content-center align-items-center">
                            <div id="voucher-qr" class="row row-cols-1 p-3">
                                <div v-if="dataBengkel.LOGO" class="col mb-3">
                                    <img :src="dataBengkel.LOGO" width="100" height="100" crossorigin=""/>
                                </div>
                                <div class="col mb-2">
                                    <h4 class="h-title">Qr-Code Diskon {{ dataBengkel.NAMA_BENGKEL }} </h4>
                                </div>
                                <div class="col">
                                    <QRCode :value="qrValue" :desc="qrDesc" />
                                </div>
                            </div>
                            <!-- <QRCodeVue3 :width="200" :height="200" :backgroundOptions="{ color: '#ffffff' }"
                                    :image="`${$baseAssets}/icon/bengkelPro.png`"
                                    :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
                                    :qrOptions="{ typeNumber: '0', mode: 'Byte', errorCorrectionLevel: 'Q' }"
                                    :dotsOptions="{
                                        type: 'dots',
                                        color: '#26249a',
                                        gradient: {
                                            type: 'linear',
                                            rotation: 0,
                                            colorStops: [
                                                { offset: 0, color: '#26249a' },
                                                { offset: 1, color: '#26249a' },
                                            ],
                                        },
                                    }" value="sample value" /> -->
                        </div>
                        <div class="col mb-3">
                            <slot name="content"></slot>
                        </div>
                        <div class="col" id="btn">
                            <button class="btn main-button" data-bs-dismiss="modal"
                                @click.prevent="downloadQr">Simpan</button>
                        </div>
                    </div>
                </div>
            </template>
        </BootstrapModal>
        <div class="content"></div>
    </div>
</template>
