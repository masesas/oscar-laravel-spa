<script setup>
import { ref, reactive } from 'vue';
import BootstrapModal from '@/Components/BootstrapModal.vue';
//import QRCodeVue3 from "qrcode-vue3";
import QRCode from '@/Components/QRCode.vue';
import html2canvas from 'html2canvas';
import '../../lib/html2canvas.min.js'
import BaseIcon from './BaseIcon.vue';
import { mdiContentCopy } from '@mdi/js';

const props = defineProps({
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
const qr = ref("")
const linkInput = ref(null)
const showCopied = ref(false)

function _show(qrValue, linkQr) {
    qr.value = qrValue
    linkInput.value.value = linkQr
    modalVoucher.value.show();
}

function downloadQr() {
    /* const ss = await makeScreenshot()
    let img = document.querySelector('#img')
    img.src = ss */
    html2canvas(document.querySelector("#app"), {
        //allowTaint: true,
        //letterRendering: 1,
        useCORS: true,
        //scale: 2,
        //height: window.outerHeight + window.innerHeight,
        //windowHeight: window.outerHeight + window.innerHeight,
        //width: 300,
        //height: 300,
    }).then(canvas => {
        //canvas.crossOrigin = 'anonymous';
        const imgUrl = canvas.toDataURL('image/png');
        const image = document.createElement('img')
        image.src = imgUrl
        //image.crossOrigin = 'anonymous';

        document.querySelector('.content').appendChild(image)

        const a = document.createElement('a')
        a.href = imgUrl
        a.download = props.qrDesc
        a.click()
    })
}

/* async function makeScreenshot(selector = "body") {
    return new Promise((resolve, reject) => {
        let node = document.querySelector(selector);

        html2canvas(node, {
            logging: true,
            allowTaint: false,
            useCORS: true,
            height: window.outerHeight + window.innerHeight,
            width: window.outerWidth + window.innerWidth,
            onrendered: (canvas) => {
                let pngUrl = canvas.toDataURL();
                resolve(pngUrl);
            }
        });
    });
}
 */

function copyText(e) {
    e.preventDefault();

    const linkInputValue = linkInput.value;
    linkInputValue.select()
    linkInputValue.setSelectionRange(0, 999999)
    navigator.clipboard.writeText(linkInputValue.value)

    showCopied.value = true
    setTimeout(() => {
        showCopied.value = false
    }, 2000)
}


defineExpose({ show: _show })
</script>
<template>
    <div>
        <BootstrapModal title="Voucher Diskon Servis" ref="modalVoucher" :show-header="false" :show-footer="false">
            <template #body>
                <div id="voucher-qr" class="container">
                    <div class="row row-cols-1 justify-content-center text-center py-3">
                        <div class="col mb-4 d-flex justify-content-center align-items-center">
                            <div class="row row-cols-1 p-3">
                                <!--  <div v-if="dataBengkel.LOGO" class="col mb-3">
                                    <img :src="dataBengkel.LOGO" width="100" height="100" alt="logo bengkel"/>
                                </div> -->
                                <div class="col mb-2">
                                    <h4 class="h-title">Tunjukan Qr-Code Saat Pembayaran Ke Kasir</h4>
                                </div>
                                <div v-if="qr" class="col mb-3">
                                    <QRCode :value="qr" :desc="qrDesc" />
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
                        <div class="col">
                            <slot name="content"></slot>
                        </div>
                        <div class="col mb-3">
                            <div class="row row-cols-1">
                                <div class="col mb-2">
                                    <div class="input-group">
                                        <input type="text" class="form-control"
                                            ref="linkInput" disabled>
                                        <div class="input-group-text">
                                            <a class="d-flex align-items-center justify-content-center" href="#"
                                                @click.prevent="copyText">
                                                <BaseIcon :path="mdiContentCopy"></BaseIcon>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="showCopied" class="col">
                                    <p class="text-success">
                                        Link Berhasil di Salin
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col" id="btn">
                            <button class="btn main-button" data-bs-dismiss="modal">
                                Selesai
                            </button>
                        </div>
                        <!-- <div class="col my-5">
                            <img id="img" width="100%" height="100%" />
                        </div> -->
                    </div>
                </div>
            </template>
        </BootstrapModal>
        <div class="content" hidden></div>
    </div>
</template>
