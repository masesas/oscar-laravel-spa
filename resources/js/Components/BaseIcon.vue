<script setup>
import { computed } from 'vue'

const props = defineProps({
    path: {
        type: String,
        required: true
    },
    w: {
        type: String,
        default: 'w-6'
    },
    h: {
        type: String,
        default: 'h-6'
    },
    color: {
        type: String,
        default: 'currentColor'
    },
    size: {
        type: [String, Number],
        default: 16
    }
})

const spanClass = computed(() => `d-inline-flex justify-content-center align-items-center ${props.w} ${props.h}`)
</script>

<template>
    <span :class="spanClass">
        <svg viewBox="0 0 24 24" :width="size" :height="size" class="d-inline">
            <path :fill="color" :d="path" />
        </svg>
    </span>
</template>
