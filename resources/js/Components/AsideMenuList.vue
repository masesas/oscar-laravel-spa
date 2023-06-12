<script setup>
import AsideMenuItem from '@/Components/AsideMenuItem.vue'

const props = defineProps({
    isDropdownList: Boolean,
    menu: {
        type: Object,
        default: () => { }
    }
})

const emit = defineEmits(['menu-click'])

const menuClick = (event, item) => {
    emit('menu-click', event, item)
}

</script>

<template>
    <ul>
        <AsideMenuItem v-for="(item, index) in props.menu" :key="index" :item="item" :is-dropdown-list="item.isDropdownList"
            @menu-click="menuClick" />
    </ul>
</template>
