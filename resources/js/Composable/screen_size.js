import { ref, onMounted, onUnmounted, computed } from 'vue'

export function useScreenSize() {
    let windowWidth = ref(window.innerWidth)
    let isMobile = ref(false)

    const onWidthChange = (event) => {
        windowWidth.value = window.innerWidth
        isMobile.value = windowWidth.value <= 768
    }
    onMounted(() => window.addEventListener('resize', onWidthChange))
    onUnmounted(() => window.removeEventListener('resize', onWidthChange))

    const type = computed(() => {
        if (windowWidth.value < 550)
            return 'xs'
        if (windowWidth.value >= 550 && windowWidth.value < 1200)
            return 'md'
        else
            return 'lg'
    })

    const width = computed(() => windowWidth.value)

    //const isMobile = computed(() => windowWidth.value <= 768)
    return { width, type, isMobile }
}
