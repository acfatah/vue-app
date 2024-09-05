import postcss from 'postcss'

import '~/styles/app.css'
import css from '~/styles/app.css?raw'

const variables = {}

try {
  const result = await postcss().process(css)
  const root = result.root

  // Walk through the CSS rules
  root.walkDecls((decl) => {
    if (decl.prop.startsWith('--')) {
      variables[decl.prop] = decl.value
    }
  })
}
catch (error) {
  console.error('Error parsing CSS:', error)
}

/**
 * Design Tokens
 */
export default {
  title: 'Foundation/DesignTokens',
  component: 'div',
}

export const Default = {
  render: args => ({
    setup() {
      const sortedKeys = Object.keys(variables).sort(
        (a, b) => a.localeCompare(b),
      )

      return { tokens: sortedKeys.map(key => ({ key, value: variables[key] })) }
    },

    template: `
      <div class="px-16 py-10">
        <h1 class="text-2xl font-bold mb-4">Design Tokens</h1>
        <template v-for="token in tokens" :key="token">
          <p><span class="font-semibold">{{ token.key }}: </span>: {{ token.value }}</p>
        <template>
      </div>
    `,
  }),
}
