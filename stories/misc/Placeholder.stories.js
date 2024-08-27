import '~/styles/app.css'
import Placeholder from '~/components/Placeholder.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

/**
 * Placeholder component is used to display a temporary visual block that mimics
 * the shape and size of the content it represents.
 */
export default {
  title: 'Misc/Placeholder',
  component: Placeholder,
  tags: ['autodocs'],
}

const defaultTemplate = `
  <Placeholder class="h-8" />
`

export const Default = {
  parameters: {
    docs: {
      source: {
        code: defaultTemplate,
      },
    },
  },

  render: () => ({
    components: { Placeholder },
    template: defaultTemplate,
  }),
}

const withContentTemplate = `
  <Placeholder class="h-8">Using default slot</Placeholder>
`

export const WithContent = {
  parameters: {
    docs: {
      source: {
        code: withContentTemplate,
      },
    },
  },

  render: () => ({
    components: { Placeholder },
    template: withContentTemplate,
  }),
}
