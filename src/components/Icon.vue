<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
})

const SvgIcon = defineAsyncComponent(async () =>
  import(`~/assets/icon/${props.name}.svg?component`),
)
</script>

<template>
  <SvgIcon />
</template>
