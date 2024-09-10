/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
}
export default config
