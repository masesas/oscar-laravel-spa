<script setup>
import { onMounted, ref } from "vue";
import { Modal } from "bootstrap";
defineProps({
    title: {
        type: String,
        default: "",
    },
    showHeader: {
        type: Boolean,
        default: true,
    },
    showFooter: {
        type: Boolean,
        default: true,
    }
});

let bootstrapModal = ref(null)
let thisModalObj = null

onMounted(() => {
    thisModalObj = new Modal(bootstrapModal.value);
});

function _show() {
    thisModalObj.show();
}

defineExpose({ show: _show });
</script>
<template>
    <div class="modal fade" id="exampleModal" data-bs-backdrop="static" aria-hidden="true" ref="bootstrapModal">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div v-if="showHeader" class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <slot name="body" />

                </div>
                <div v-if="showFooter" class="modal-footer">
                    <slot name="footer"></slot>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
