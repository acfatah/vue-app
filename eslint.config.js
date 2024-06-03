import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
  },
  ...compat.config({
    extends: [
      'plugin:tailwindcss/recommended',
      'plugin:storybook/recommended',
    ],
  }),
)
