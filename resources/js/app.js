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
import VueGtag from "vue-gtag";
import "vue3-snackbar/styles";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Oscar';

const pinia = createPinia()

createInertiaApp({
    progress: {
        delat: 250,
        color: '#6f42c1',
        showSpinner: false,
        includeCSS: true,
    },
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const myApp = createApp({ render: () => h(App, props) });
        const assets = process.env.NODE_ENV != 'production' ? '/img' : 'https://otomotives.com/oscar/img';

        myApp.use(VueSweetalert2)
        myApp.use(plugin)
        myApp.use(pinia)
        myApp.use(ZiggyVue, Ziggy)
        myApp.use(SnackbarService)
        myApp.use(VueGtag, {
            config: { id: "AW-11226084301" }
        })

        myApp.config.globalProperties.$route = route
        myApp.config.globalProperties.$baseAssets = assets

        window.Swal = myApp.config.globalProperties.$swal

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
