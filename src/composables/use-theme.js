import { watchEffect } from 'vue'
import { useColorMode, usePreferredDark } from '@vueuse/core'

export function useTheme() {
  const colorMode = useColorMode()
  const preferredDark = usePreferredDark()

  // Initialize the color mode based on user preference
  watchEffect(() => {
    colorMode.value = preferredDark.value ? 'dark' : 'light'
  })

  watchEffect(() => {
    if (colorMode.value === 'dark')
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
  })

  function toggleTheme() {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  }

  return {
    colorMode,
    toggleTheme,
  }
}
