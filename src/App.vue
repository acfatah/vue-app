<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStorage } from '@vueuse/core'
import BlankLayout from './layouts/BlankLayout.vue'

const route = useRoute()
const theme = useStorage('theme', 'light')

function setTheme() {
  // Use the followig value to detect default user preference scheme
  // eslint-disable-next-line unused-imports/no-unused-vars
  const preferColorSchemeIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (theme.value === 'dark')
    document.documentElement.classList.add('dark')
  else
    document.documentElement.classList.remove('dark')
}

function setBackgroundColor() {
  document.getElementById('app')?.classList.add('dark:bg-neutral-950')
}

onMounted(() => {
  setBackgroundColor()
  setTheme()
})
</script>

<template>
  <component :is="route.meta.layout || BlankLayout">
    <router-view />
  </component>
</template>
