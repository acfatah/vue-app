<template>
  <div class="relative flex h-full min-h-4 items-center justify-center overflow-hidden rounded border border-dashed border-neutral-400 opacity-75 dark:border-neutral-500 dark:text-neutral-50">
    <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 size-full stroke-neutral-400/30 dark:stroke-neutral-500/40">
      <defs>
        <pattern id="placeholder-svg-pattern" patternUnits="userSpaceOnUse" width="10" height="10">
          <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#placeholder-svg-pattern)" />
    </svg>
    <slot />
  </div>
</template>
