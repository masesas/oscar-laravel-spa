import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import removePreloads from './removePreloads'

export default defineConfig({
    build: {
        modulePreload: false,
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
                    base: 'https://otomotives.com/oscar',
                    includeAbsolute: true,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
});
