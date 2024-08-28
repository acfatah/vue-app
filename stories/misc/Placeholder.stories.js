import '~/styles/app.css'
import Placeholder from '~/components/Placeholder.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

/**
 * Placeholder component is used to display a temporary visual block that mimics
 * the shape and size of the content it represents.
 *
 * Height dimension is required.
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

/**
 * We can use html elements as content.
 */
export const WithContent = {
  parameters: {
    docs: {
      source: {
        code: `
<Placeholder class="h-8">
  <!-- Default slot content -->
</Placeholder>
`,
      },
    },
  },

  args: {
    label: 'Using default slot',
  },

  render: args => ({
    components: { Placeholder },

    setup() {
      return { args }
    },

    template: `
  <Placeholder class="min-h-8">
    <span v-html="args.label"></span>
  </Placeholder>
`,
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

  argTypes: {
    textSize: {
      control: { type: 'select' },
      options: [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
      ],
    },

    fontWeight: {
      control: { type: 'select' },
      options: [
        'font-thin',
        'font-extralight',
        'font-light',
        'font-normal',
        'font-medium',
        'font-semibold',
        'font-bold',
        'font-extrabold',
      ],
    },
  },

  render: args => ({
    components: { Placeholder },

    setup() {
      return { args }
    },

    template: `
      <div class="flex gap-2">
        <div class="flex flex-col items-center justify-between">
          <Placeholder class="size-8 rounded-full" :class="[args.textSize, args.fontWeight]">
            <span class="leading-relaxed" v-html="args.label" />
          </Placeholder>
          <div class="text-xs">size-8</div>
        </div>
        <div class="flex flex-col items-center justify-between">
          <Placeholder class="size-10 rounded-full" :class="[args.textSize, args.fontWeight]">
            <span class="leading-relaxed" v-html="args.label" />
          </Placeholder>
          <span class="text-xs">size-10</span>
        </div>
        <div class="flex flex-col items-center justify-between">
          <Placeholder class="size-12 rounded-full" :class="[args.textSize, args.fontWeight]">
            <span class="leading-relaxed" v-html="args.label" />
          </Placeholder>
          <span class="text-xs">size-12</span>
        </div>
        <div class="flex flex-col items-center justify-between">
          <Placeholder class="size-14 rounded-full" :class="[args.textSize, args.fontWeight]">
            <span class="leading-relaxed" v-html="args.label" />
          </Placeholder>
          <span class="text-xs">size-14</span>
        </div>
        <div class="flex flex-col items-center justify-between">
          <Placeholder class="size-16 rounded-full" :class="[args.textSize, args.fontWeight]">
            <span class="leading-relaxed" v-html="args.label" />
          </Placeholder>
          <span class="text-xs">size-16</span>
        </div>
      </div>
    `,
  }),
}
