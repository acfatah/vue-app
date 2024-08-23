import '~/styles/app.css'
import { vueRouter } from 'storybook-vue3-router'

import HomeView from './HomeView.vue'
import DefaultLayout from '~/layouts/DefaultLayout.vue'
import Placeholder from '~/components/Placeholder.vue'

const customRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },

]

export default {
  title: 'Layout/Stacked',
  component: DefaultLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

/**
 * The default layout
 */
export const Default = {
  decorators: [vueRouter(customRoutes)],

  render: args => ({
    components: { Placeholder, DefaultLayout },
    setup() {
      return { args }
    },
    template: `
      <DefaultLayout>
        <template #header>
          <Placeholder class="h-[10vh] dark:text-white">Header</Placeholder>
        </template>

        <template #footer>
          <Placeholder class="h-[10vh] dark:text-white">Footer</Placeholder>
        </template>
      </DefaultLayout>
    `,
  }),
}
