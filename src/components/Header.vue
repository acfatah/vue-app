<script setup>
import ViteSvg from '../assets/vite.svg'
import VueSvg from '../assets/vue.svg'
import TailwindcssSvg from '../assets/tailwindcss.svg'
import { useTheme } from '~/composables/use-theme.js'

const { colorMode, toggleTheme } = useTheme()
</script>

<template>
  <header>
    <div class="flex justify-center">
      <a href="https://vitejs.dev" target="_blank" class="m-4">
        <ViteSvg width="48" height="48" alt="Vite logo" class="transition-all duration-300 hover:drop-shadow-[0_0_32px_#646cff]" />
      </a>
      <a href="https://vuejs.org/" target="_blank" class="m-4">
        <VueSvg width="48" height="48" alt="Vue logo" class="transition-all duration-300 hover:drop-shadow-[0_0_32px_#42b883]" />
      </a>
      <a href="https://tailwindcss.com/" target="_blank">
        <TailwindcssSvg width="48" height="48" alt="Tailwindcss logo" class="transition-all duration-300 hover:drop-shadow-[0px_0px_2em__#38bdf8aa]" />
      </a>
    </div>
  </header>
  <!-- Dark mode switcher example -->
  <Teleport to="body">
    <button class="fixed right-4 top-4 rounded-full border bg-background p-2" @click="toggleTheme">
      {{ colorMode === 'dark' ? '🌞' : '🌙' }}
    </button>
  </Teleport>
</template>
