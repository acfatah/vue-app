import aspectRatio from '@tailwindcss/aspect-ratio'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './stories/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    aspectRatio,
    forms,
    typography,
  ],
  safelist: [
    'bg-foreground',
    'bg-background',
    'bg-primary',
    'bg-secondary',
    'bg-destructive',
    'bg-muted',
    'bg-accent',
    'bg-popover',
    'bg-card',
    'bg-primary-foreground',
    'bg-secondary-foreground',
    'bg-destructive-foreground',
    'bg-muted-foreground',
    'bg-accent-foreground',
    'bg-popover-foreground',
    'bg-card-foreground',
    'bg-ring',
    'bg-border',
    'bg-input',
    'font-thin',
    'font-extralight',
    'font-light',
    'font-normal',
    'font-medium',
    'font-semibold',
    'font-bold',
    'font-extrabold',

    'gap-2',
    'gap-4',

    'leading-none',
    'leading-tight',
    'leading-snug',
    'leading-normal',
    'leading-relaxed',

    'min-h-16',
    'min-h-8',

    'rounded-full',

    'size-8',
    'size-10',
    'size-12',
    'size-14',
    'size-16',

    'text-xs',
    'text-sm',
    'text-base',
    'text-lg',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
  ],
}
