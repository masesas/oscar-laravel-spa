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

    <div class="">
        <div v-if="canLogin" class="d-flex align-items-end justify-content-between">
            <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="">
            Dashboard</Link>

            <template v-else>
                <Link :href="route('login')" class="">
                Log in
                </Link>
            </template>
            <Link :href="route('bengkel.ads.index')" class="">
            Bengkel
            </Link>
        </div>

        <div class="text-center d-flex align-items-center justify-content-center">
            <img src="/img/icon/oscar.png" height="200" width="500" />
        </div>
    </div>
</template>

<style>

</style>
