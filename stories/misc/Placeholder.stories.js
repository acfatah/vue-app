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

const roundedTemplate = `
  <Placeholder class="size-8 rounded-full">AA</Placeholder>
`

export const Rounded = {
  parameters: {
    docs: {
      source: {
        code: roundedTemplate,
      },
    },
  },

  args: {
    label: 'AA',
  },

  render: args => ({
    components: { Placeholder },

    template: `
      <div class="flex gap-2">
        <div class="flex flex-col justify-between items-center">
          <Placeholder class="size-8 rounded-full">${args.label}</Placeholder>
          <div class="text-xs">size-8</div>
        </div>
        <div class="flex flex-col justify-between items-center">
          <Placeholder class="size-10 rounded-full">${args.label}</Placeholder>
          <span class="text-xs">size-10</span>
        </div>
        <div class="flex flex-col justify-between items-center">
          <Placeholder class="size-12 rounded-full">${args.label}</Placeholder>
          <span class="text-xs">size-12</span>
        </div>
        <div class="flex flex-col justify-between items-center">
          <Placeholder class="size-14 rounded-full">${args.label}</Placeholder>
          <span class="text-xs">size-14</span>
        </div>
        <div class="flex flex-col justify-between items-center">
          <Placeholder class="size-16 rounded-full">${args.label}</Placeholder>
          <span class="text-xs">size-16</span>
        </div>
      </div>
    `,
  }),
}
