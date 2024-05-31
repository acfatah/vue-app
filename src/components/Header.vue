<script setup>
import ViteSvg from '../assets/vite.svg'
import VueSvg from '../assets/vue.svg'
</script>

<template>
  <header>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <ViteSvg class="logo" width="48" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <VueSvg class="logo vue" width="48" alt="Vue logo" />
      </a>
    </div>
  </header>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
