import { ref, onMounted, onUnmounted, computed } from 'vue'

export function useScreenSize() {
    let windowWidth = ref(window.innerWidth)

    const onWidthChange = () => windowWidth.value = window.innerWidth
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

    const isMobile = computed(() => windowWidth.value <= 768);

    return { width, type, isMobile }
}
