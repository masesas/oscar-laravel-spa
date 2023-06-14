import '../css/main.css';
import '../sass/app.scss';
import 'bootstrap';

import { createPinia } from 'pinia'
import { useStyleStore } from '@/Stores/style.js'
import { useLayoutStore } from '@/Stores/layout.js'

import { darkModeKey, styleKey } from '@/config.js'

import { createApp, h } from 'vue';
import { createInertiaApp, router } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { SnackbarService } from "vue3-snackbar";
import "vue3-snackbar/styles";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Oscar';

const pinia = createPinia()

createInertiaApp({
    progress: {
        color: '#4B5563',
        showSpinner: true,

    },
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const myApp = createApp({ render: () => h(App, props) });
        const assets = process.env.NODE_ENV != 'production' ? '/img' : 'https://otomotives.com/oscar';

        myApp.config.globalProperties.$route = route
        myApp.config.globalProperties.$baseAssets = assets;

        myApp.use(plugin)
        myApp.use(pinia)
        myApp.use(ZiggyVue, Ziggy)
        myApp.use(SnackbarService)
        myApp.mount(el);

        return myApp;
    },
}).then(r => {

})

const styleStore = useStyleStore(pinia)
const layoutStore = useLayoutStore(pinia)

/* App style */
styleStore.setStyle(localStorage[styleKey] ?? 'basic')

/* Dark mode */
if ((!localStorage[darkModeKey] && window.matchMedia('(prefers-color-scheme: dark)').matches) || localStorage[darkModeKey] === '1')
{
    styleStore.setDarkMode(true)
} else
{
    styleStore.setDarkMode(false)
}

/* Collapse mobile aside menu on route change */
router.on('navigate', (event) => {
    layoutStore.isAsideExpanded = false
})
