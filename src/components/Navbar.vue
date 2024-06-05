<template>
  <nav class="flex justify-center dark:text-white">
    <RouterLink to="/">
      Home
    </RouterLink>
    <RouterLink to="/about" class="ml-4 border-l border-solid border-black pl-4 dark:border-white">
      About
    </RouterLink>
    <RouterLink to="/blank" class="ml-4 border-l border-solid border-black pl-4 dark:border-white">
      Blank
    </RouterLink>
  </nav>
</template>

<style scoped>
/* https://v3.router.vuejs.org/api/#router-link */
nav a.router-link-exact-active {
  @apply text-blue-500;
}

/* https://v3.router.vuejs.org/api/#router-link */
nav a.router-link-exact-active:hover {
  @apply underline;
}
</style>
