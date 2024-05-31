<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import BlankLayout from './layouts/BlankLayout.vue'

const route = useRoute()

onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
    document.documentElement.classList.add('dark')
  else
    document.documentElement.classList.remove('dark')
})
</script>

<template>
  <component :is="route.meta.layout || BlankLayout">
    <router-view />
  </component>
</template>
