<script setup>
import { computed } from 'vue'
import TableRow from './TableRow.vue'
import TableCell from './TableCell.vue'

const props = defineProps({
  colspan: {
    type: Number,
    default: 1,
  },
})
</script>

<template>
  <TableRow>
    <TableCell
      class="whitespace-nowrap p-4 align-middle text-sm text-foreground"
      v-bind="props"
    >
      <div class="flex items-center justify-center py-10">
        <slot />
      </div>
    </TableCell>
  </TableRow>
</template>
