import { computed, onMounted, ref } from 'vue'
import { parseCss } from './design-system-tokens.js'

/**
 * Design Tokens
 */
export default {
  title: 'Foundation/DesignTokens',
  component: 'div',
}

export const Default = {
  render: () => ({
    setup() {
      const tokens = ref({ default: {} })
      const themes = computed(() => Object.keys(tokens.value))

      const sortedKeys = computed(() => {
        return Object
          .keys(tokens.value.default)
          .sort((a, b) => a.localeCompare(b))
      })

      onMounted(async () => {
        tokens.value = await parseCss()
      })

      return { tokens, themes, sortedKeys }
    },

    template: `
      <div class="px-16 py-10">
        <h1 class="text-2xl font-bold mb-4">Design Tokens</h1>
        <template v-for="theme in themes" :key="theme">
          <h2 class="my-4 text-xl font-bold ">{{ theme }}</h2>
          <template v-for="key in sortedKeys" :key="key">
            <p><span class="font-semibold">{{ key }}</span>: {{ tokens[theme][key] }}</p>
          </template>
        </template>
      </div>
    `,
  }),
}
