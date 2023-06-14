import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import removePreloads from './removePreloads'

export default defineConfig({
    build: {
        modulePreload: false,
        modulePreload: {
            resolveDependencies(url, deps, context) {
                return [] // Your list of preloaded deps.
            },
        },
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
            publicDirectory: '/var/www/otomotives.com/oscar'
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
