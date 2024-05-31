<script setup>
import { useCounterStore } from '../stores/counter/index.js'

defineProps({
  msg: String,
})

const counterStore = useCounterStore()
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="counterStore.increment">
      count is {{ counterStore.count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>
