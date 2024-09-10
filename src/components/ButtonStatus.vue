<script setup>
import { computed } from 'vue'

const props = defineProps({
  loading: { type: Boolean, default: false },
  icon: { type: String, default: '' },
  status: { type: String, default: '' },
})

const statusClass = computed(() => {
  switch (props.status) {
    case 'success':
      return 'bg-success text-success-foreground hover:bg-success/80'
    case 'info':
      return 'bg-info text-info-foreground hover:bg-info/80'
    case 'warning':
      return 'bg-warning text-warning-foreground hover:bg-warning/80'
    case 'error':
      return 'bg-error text-error-foreground hover:bg-error/80'
    default:
      return 'bg-accent text-accent-foreground  hover:bg-accent/80 hover:text-accent-foreground/70'
  }
})
</script>

<template>
  <button
    class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    :class="statusClass"
    :disabled="props.loading"
  >
    <Icon v-if="props.icon && !props.loading" :name="props.icon" class="mr-2" />
    <Icon v-if="props.loading" name="loader-circle" class="mr-2 animate-spin" />
    <slot />
  </button>
</template>
