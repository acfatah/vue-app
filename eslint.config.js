import antfu from '@antfu/eslint-config'
import tailwindcss from 'eslint-plugin-tailwindcss'
import * as eslintPluginStorybook from 'eslint-plugin-storybook'

export default antfu(
  {
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
  },
  // @ts-ignore
  ...tailwindcss.configs['flat/recommended'],
  eslintPluginStorybook.configs['flat/recommended'],
)
