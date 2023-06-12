import { ref, onMounted, onUnmounted, computed } from 'vue'

export function useScroll() {
    const header = ref(null);
    const toggleClass = "is-sticky";
    let currentScroll = ref(window.scrollY);

    const onScroll = (event) => {
        currentScroll = event.scrollY
    }
    onMounted(() => window.addEventListener('scroll', onScroll))
    onUnmounted(() => window.removeEventListener('scroll', onScroll))

    const headerClass = computed(() => {
        if (currentScroll > 150)
        {
            header.value = toggleClass;
        } else
        {
            header.value = null;
        }
    });


    return { headerClass, header }
}
