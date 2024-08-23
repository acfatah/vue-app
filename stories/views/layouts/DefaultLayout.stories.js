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

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Views/Layouts/DefaultLayout',
  component: DefaultLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

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
