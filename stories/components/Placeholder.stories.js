import '~/styles/app.css'
import Placeholder from '~/components/Placeholder.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

/**
 * Placeholder component is used to display a temporary visual block that mimics
 * the shape and size of the content it represents.
 */
export default {
  title: 'Components/Placeholder',
  component: Placeholder,
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: '<Placeholder />',
      },
    },
  },
  render: () => ({
    components: { Placeholder },
    template: '<Placeholder />',
  }),
}

export const WithContent = {
  parameters: {
    docs: {
      source: {
        code: '<Placeholder>Using default slot</Placeholder>',
      },
    },
  },
  render: () => ({
    components: { Placeholder },
    template: '<Placeholder>Using default slot</Placeholder>',
  }),
}
