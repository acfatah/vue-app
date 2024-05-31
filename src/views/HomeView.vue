<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <slot name="header">
    <!-- Header Section -->
    <Header />
    <!-- Menu Navigation -->
    <Navbar />
  </slot>
  <!-- Body Section -->
  <main>
    <HelloWorld />
  </main>
  <slot name="footer">
    <!-- Footer Section -->
    <Footer />
  </slot>
</template>
