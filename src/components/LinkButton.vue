<script setup>
const props = defineProps({
  loading: { type: Boolean, default: false },
  label: { type: String, default: 'Button' },
  icon: { type: String, default: '' },
})
</script>

<template>
  <button
    class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-primary underline-offset-4 ring-offset-background transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    :disabled="props.loading"
  >
    <Icon v-if="props.icon && !props.loading" :name="props.icon" class="mr-2" />
    <Icon v-if="props.loading" name="loader-circle" class="mr-2 animate-spin" />
    {{ props.label }}
  </button>
</template>
