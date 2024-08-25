import { defineComponent } from 'vue'

import '~/styles/app.css'
import Placeholder from '~/components/Placeholder.vue'

const basicSidebarTemplate = `
  <nav class="flex max-h-screen min-h-screen w-64 flex-col">
    <Placeholder class="sticky top-0 z-10 min-h-16 bg-white dark:bg-black">
      Brand
    </Placeholder>
    <Placeholder class="grow bg-white opacity-100 dark:bg-black">
      Sidenav
    </Placeholder>
    <Placeholder class="sticky bottom-0 z-10 min-h-8 bg-white dark:bg-black">
      Sidenav Footer
    </Placeholder>
  </nav>
`
const BasicSidebar = defineComponent({
  name: 'BasicSidebar',
  components: { Placeholder },

  setup() {
    return { Placeholder }
  },

  template: basicSidebarTemplate,
})

export default {
  title: 'Layout/Sidebar',
  component: BasicSidebar,
  tags: ['autodocs'],
}

/**
 * The default Sidebar
 */
export const Default = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: basicSidebarTemplate,
      },
      story: {
        inline: false,
        height: '668px',
      },
    },
  },
}
