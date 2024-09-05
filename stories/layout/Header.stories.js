import { defineComponent } from 'vue'

import '~/styles/app.css'
import Placeholder from '~/components/Placeholder.vue'
import Icon from '~/components/Icon.vue'

const basicHeaderTemplate = `
  <header class="flex min-h-16 items-center justify-between border-b border-neutral-200 px-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
    <div class="flex items-center gap-2">
      <h2 class="text-lg font-semibold">Vue App</h2>
    </div>
    <div>
      <!-- desktop display -->
      <div class="hidden gap-2 md:flex">
        <button type="button" class="flex items-center justify-center size-8 ring-neutral-300 focus:ring-ring rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none hover:bg-neutral-100">
          <Icon name="bell"><span class="sr-only">Notification</span>
        </button>
        <Placeholder class="size-8 cursor-pointer rounded-full">
          AA
        </Placeholder>
      </div>
      <!-- mobile display -->
      <div class="flex md:hidden">
        <button type="button" class="flex items-center justify-center size-8 ring-neutral-300 focus:ring-ring rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
          <Icon name="ellipsis-vertical"><span class="sr-only">Menu</span>
        </button>
      </div>
    </div>
  </header>
`
const BasicHeader = defineComponent({
  name: 'BasicHeader',
  components: { Icon, Placeholder },

  setup() {
    return { Icon, Placeholder }
  },

  template: basicHeaderTemplate,
})

export default {
  title: 'Layout/Header',
  component: BasicHeader,
  tags: ['autodocs'],
}

/**
 * The default Header
 */
export const Default = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: basicHeaderTemplate,
      },
      story: {
        inline: false,
        height: '112px',
      },
    },
  },
}

export const HeaderMenuIconButton = {
  parameters: {
    docs: {
      source: {
        code: `
<button type="button" class="flex items-center justify-center size-8 ring-neutral-300 focus:ring-ring rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none hover:bg-neutral-100">
  <Icon name="ellipsis-vertical"><span class="sr-only">Menu</span>
</button>
`,
      },
    },
  },

  args: {
    name: 'ellipsis-vertical',
  },

  render: args => ({
    components: { Icon, Placeholder },

    setup() {
      return { args }
    },

    template: `
      <button type="button" class="flex items-center justify-center size-8 ring-neutral-300 focus:ring-ring rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none hover:bg-neutral-100">
        <Icon v-bind="args"><span class="sr-only">Menu</span>
      </button>
    `,
  }),
}
