<script setup>
import { Head, Link } from '@inertiajs/vue3';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    logo: String,
});
</script>

<template>
    <Head title="Welcome" />
    <div class="vh-100 w-100">
        <div class="container">
            <div v-if="canLogin" class="d-flex align-items-center justify-content-end">
                <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="">
                Dashboard</Link>

                <template v-else>
                    <Link :href="route('login')" class="btn btn-primary m-3">
                    Log in
                    </Link>
                </template>
                <Link :href="route('bengkel.ads.', '0ae85b7d-d843-11eb-b18a-2cea7f647529')" class="btn btn-primary">
                Bengkel
                </Link>
            </div>
        </div>

        <div class="container">
            <div class="row vh-100 align-items-center">
                <div class="text-center d-flex align-items-center justify-content-center">
                    <img :src="$baseAssets + '/icon/oscar.png'" height="200" width="500" />
                </div>
            </div>

        </div>
    </div>
</template>

<style></style>
