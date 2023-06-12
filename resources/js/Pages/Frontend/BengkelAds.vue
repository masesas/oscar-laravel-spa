<script setup>
import { ref } from 'vue';
import { Head, Link, useForm } from "@inertiajs/vue3"
import BaseButton from '@/Components/BaseButton.vue';
import SectionTitleLineWithButton from '@/Components/SectionTitleLineWithButton.vue'
import NavBarItemLabel from '@/Components/NavBarItemLabel.vue';
import CardBox from "@/Components/CardBox.vue"
import FormField from '@/Components/FormField.vue'
import FormControl from '@/Components/FormControl.vue'
import BaseDivider from '@/Components/BaseDivider.vue'
import BaseButtons from '@/Components/BaseButtons.vue'
import SectionMain from '@/Components/SectionMain.vue';
import SectionGrid from '@/Components/SectionGrid.vue';

const isOpenMenu = ref(false)

const openMenu = () => isOpenMenu = !isOpenMenu


const form = useForm({
    _method: 'post',
    name: '',
})

</script>
<template>
    <div class="w-full">
        <header class="fixed w-full">
            <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                <div class="flex flex-wrap items-center justify-between max-w-screen-xl-1 px-4 mx-auto shadow-card">
                    <a class="flex item-center">
                        <img src="/img/icon/bengkelPro.png" class="h-6 mr-3 sm:h-9" />
                        <span class="self-center text-xl font-bold whitespace-nowrap dark:text-white">Nama Bengkel</span>
                    </a>
                    <div class="flex items-center lg:order-2">
                        <button type="button"
                            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-2">
                        <ul
                            class="flex flex-col p-4 font-medium border border-gray-100 rounde-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#"
                                    class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                    aria-current="page">
                                    Profile Bengkel
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Foto
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Tentang
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <SectionGrid class="pt-14 bg-white dark:bg-gray-800">
            <div class="hidden lg:block lg:col-span-12 lg:mt-10">

            </div>
            <div class="col-span-12 lg:col-span-7 p-5">
                <img class="shadow-card" src="/img/banner/ads/banner_ads_sengkaling.png" />
            </div>
            <div class="place-self-center text-center mt-10 col-span-12 lg:col-span-5 p-5">
                <h3
                    class="mb-4 max-w-2xl text-2xl font-extrabold leading-none md:text-5xl xl:text-2xl dark:text-white text-center">
                    Masukkan No. Ponsel Untuk Mendapatkan Promo Bengkel
                </h3>
                <CardBox form @submit.prevent="form.post(route('user.update', 1))">
                    <FormField :class="{ 'text-red-400': form.errors.name }">
                        <FormControl v-model="form.name" type="text" placeholder="No. Ponsel" :error="form.errors.name">
                            <div class="text-red-400 text-sm" v-if="form.errors.name">
                                {{ form.errors.name }}
                            </div>
                        </FormControl>
                    </FormField>
                    <template #footer>
                        <BaseButtons>
                            <BaseButton type="submit" color="info" label="Claim Voucher" class="w-full"
                                :class="{ 'opacity-25': form.processing }" :disabled="form.processing" />
                        </BaseButtons>
                    </template>
                </CardBox>
            </div>
        </SectionGrid>

        <footer class=""></footer>

    </div>
</template>

<style lang="css" scoped>
header.masthead {
    padding-top: 10rem;
    padding-bottom: calc(10rem - 4.5rem);
    background: linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url("https://otomotives.com/app/images/bengkel/0ae85b7d-d843-11eb-b18a-2cea7f647529/FotoBengkel/Depan-2023-03-30-06:23:24-AHASS-SENGKALING.png");
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
}

</style>
