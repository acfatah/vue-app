import aspectRatio from '@tailwindcss/aspect-ratio'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    aspectRatio,
    forms,
    typography,
  ],
  safelist: [
    'gap-2',
    'gap-4',
    'min-h-16',
    'min-h-8',
    'rounded-full',
    'size-8',
    'size-10',
    'size-12',
    'size-14',
    'size-16',
    'text-xs',
  ],
}
