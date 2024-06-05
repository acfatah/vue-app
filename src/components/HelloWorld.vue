<script setup>
import { useCounterStore } from '../stores/counter/index.js'

defineProps({
  msg: String,
})

const counterStore = useCounterStore()
</script>

<template>
  <h1 class="text-7xl leading-tight">
    {{ msg }}
  </h1>

  <div class="flex flex-col justify-center p-8">
    <div class="flex justify-center">
      <button
        class="cursor-pointer rounded-lg border bg-gray-100 px-3 py-2 font-sans text-base font-medium transition-colors hover:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 dark:border-transparent dark:bg-gray-900 dark:text-white"
        type="button"
        @click="counterStore.increment"
      >
        count is {{ counterStore.count }}
      </button>
    </div>
    <p class="mt-4 text-[#888]">
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>
