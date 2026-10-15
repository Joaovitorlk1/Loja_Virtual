<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <div class="d-flex flex-column wrapper">
        <Navbar />
        <RouterView />
        <Footer />
    </div>
</template>