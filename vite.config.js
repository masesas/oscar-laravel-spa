import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import removePreloads from './removePreloads'

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    return defineConfig({
        define: {
            "process.env": env,
        },
        build: {
            modulePreload: false,
            rollupOptions: {

            }
        },
        plugins: [
            removePreloads(),
            laravel({
                input: [
                    'resources/sass/app.scss',
                    'resources/js/app.js',
                ],
                refresh: true,
                buildDirectory: '/build',
                publicDirectory: 'public'
            }),
            vue({
                template: {
                    transformAssetUrls: {
                        base: process.env.NODE_ENV !== 'production' ? null : 'https://otomotives.com/oscar',
                        includeAbsolute: process.env.NODE_ENV === 'production',
                    },
                },
            }),
        ],
        resolve: {
            alias: {
                '@': '/resources/js',
                vue: 'vue/dist/vue.esm-bundler.js',
                $fonts: 'public/fonts',
                $img: 'public/img',
                'ziggy': '/vendor/tightenco/ziggy/dist',
                'ziggy-vue': '/vendor/tightenco/ziggy/src/js/vue'
            },
        },
    });
}
