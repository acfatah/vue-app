<script setup>
import { computed } from 'vue'

const props = defineProps({
  height: {
    type: String,
    default: '70vh',
  },
})

const style = computed(() => ({ minHeight: props.height }))
</script>

<template>
  <Placeholder
    :style="style"
    class="dark:text-white"
  >
    Home view
  </Placeholder>
</template>
