<script setup>
import { router } from '@inertiajs/vue3'
import { mdiLogout, mdiClose, mdiArrowLeftThick } from '@mdi/js'
import { computed } from 'vue'
import { useLayoutStore } from '@/Stores/layout.js'
import { useStyleStore } from '@/Stores/style.js'
import AsideMenuList from '@/Components/AsideMenuList.vue'
import AsideMenuItem from '@/Components/AsideMenuItem.vue'
import BaseIcon from '@/Components/BaseIcon.vue'

const props = defineProps({
    menu: {
        type: Object,
        default: () => {
        }
    }
})

const layoutStore = useLayoutStore()

const styleStore = useStyleStore()

const logoutItem = computed(() => ({
    label: 'Logout',
    icon: mdiLogout,
    color: 'info',
    link: '#'
}))

const logoutItemClick = () => {
    router.post(route('logout'))
}

const menuClick = (event, item) => {
    event.preventDefault();

    if (item.children)
    {
        console.log('item', item);
        return
    }

    if (item.route)
    {
        router.get(route(item.route))
        return
    }


}

//console.log(props.menu);
</script>

<template>
    <aside id="aside" class="sidebar">
        <div :class="styleStore.asideStyle" class="flex-1 flex flex-col dark:bg-slate-900 py-5">
            <div :class="styleStore.darkMode ? 'aside-scrollbars-[slate]' : styleStore.asideScrollbarsStyle"
                class="flex-1 overflow-y-auto overflow-x-hidden rounded-lg shadow-lg">
                <AsideMenuList :menu="menu" @menu-click="menuClick" />
            </div>
            <ul>
                <AsideMenuItem :item="logoutItem" @menu-click="logoutItemClick" />
            </ul>
        </div>
    </aside>
</template>
