import '~/styles/app.css'
import Placeholder from '~/components/Placeholder.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Placeholder',
  component: Placeholder,
  tags: ['autodocs'],
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  render: () => ({
    components: { Placeholder },
    template: '<Placeholder />',
  }),
}

export const WithDefaultSlot = {
  render: () => ({
    components: { Placeholder },
    template: '<Placeholder>Using default slot</Placeholder>',
  }),
}
