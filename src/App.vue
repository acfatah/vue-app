<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStorage } from '@vueuse/core'
import BlankLayout from './layouts/BlankLayout.vue'

const route = useRoute()
const theme = useStorage('theme', 'light')

// Use the followig value to detect default user preference scheme
// eslint-disable-next-line unused-imports/no-unused-vars
const preferColorSchemeIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches

onMounted(() => {
  if (theme.value === 'dark')
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
