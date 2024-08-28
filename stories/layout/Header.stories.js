import { defineComponent } from 'vue'

import '~/styles/app.css'
import Placeholder from '~/components/Placeholder.vue'

const basicHeaderTemplate = `
  <header class="flex min-h-16 items-center justify-between border-b border-gray-200 px-4 dark:border-gray-800 dark:text-neutral-50">
    <div class="flex items-center gap-2">
      <Placeholder class="cursor-pointer p-1">
        Vue Application
      </Placeholder>
    </div>
    <div>
      <!-- desktop display -->
      <div class="hidden gap-2 lg:flex">
        <Placeholder class="size-8 cursor-pointer items-center" @click="toggleSidebar">
          🔔
        </Placeholder>
        <Placeholder class="size-8 cursor-pointer rounded-full">
          AA
        </Placeholder>
      </div>
      <!-- mobile display -->
      <div class="flex lg:hidden">
        <Placeholder class="size-8 cursor-pointer items-center" @click="toggleSidebar">
          ☰
        </Placeholder>
      </div>
    </div>
  </header>
`
const BasicHeader = defineComponent({
  name: 'BasicHeader',
  components: { Placeholder },

  setup() {
    return { Placeholder }
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
        height: '668px',
      },
    },
  },
}

