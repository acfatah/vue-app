import '~/styles/app.css'
import Icon from '~/components/Icon.vue'

export default {
  title: 'Graphic Elements/Icon',
  component: Icon,
  tags: ['autodocs'],
}

/**
 * Load svg icon from `src/assets/icon`. We are using [`vite-svg-loader`](https://github.com/jpkleemans/vite-svg-loader)
 * to load the svg file.
 */
export const Default = {
  parameters: {
    docs: {
      source: {
        code: '<Icon name="menu" />',
      },
    },
  },

  args: {
    name: 'menu',
  },

  render: args => ({
    components: { Icon },

    setup() {
      return { args }
    },

    template: '<Icon v-bind="args" />',
  }),

}
