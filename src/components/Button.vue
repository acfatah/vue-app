<script setup>
const props = defineProps({
  loading: { type: Boolean, default: true },
  label: { type: String, default: 'Button' },
})
</script>

<template>
  <button
    class="inline-flex h-8 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    :disabled="props.loading"
  >
    <Icon v-if="props.loading" name="loader-circle" class="mr-2 animate-spin" />
    {{ props.label }}
  </button>
</template>
