<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <slot name="header">
    <!-- Header Section -->
    <Header />
    <!-- Menu Navigation -->
    <Navbar />
  </slot>
  <!-- Body Section -->
  <main class="flex grow items-center justify-center">
    <p class="dark:text-white">
      This is an about page
    </p>
  </main>
  <slot name="footer">
    <!-- Footer Section -->
    <Footer class="flex justify-center" />
  </slot>
</template>
