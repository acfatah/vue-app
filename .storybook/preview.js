import { withThemeByClassName } from '@storybook/addon-themes'
import '../src/styles/app.css'

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Readme',
          'Foundation',
          ['Design Tokens', 'Colors'],
          'Graphic Elements',
          'Form',
          'Misc',
          'Layout',
          'Example',
        ],
        locales: 'en-US',
      },
    },
    themes: {
      target: 'html',
    },
    backgrounds: {
      disable: true,
      grid: {
        cellSize: 4,
        opacity: 0.1,
        cellAmount: 4,
        offsetX: 0, // Default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
        offsetY: 0, // Default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      },
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),

    // Decorator to apply bg-color to stories in dark mode
    (_) => {
      const body = document.querySelector('body')
      const stories = document.querySelectorAll('.docs-story')
      const DARK_MODE_CLASS = 'dark:bg-neutral-950'

      body?.classList.add(DARK_MODE_CLASS)
      stories.forEach((element) => {
        element.classList.add(DARK_MODE_CLASS)
      })

      return { template: `<story/>` }
    },
  ],
}

export default preview
