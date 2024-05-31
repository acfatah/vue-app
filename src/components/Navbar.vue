<template>
  <nav>
    <RouterLink to="/">
      Home
    </RouterLink>
    <RouterLink to="/about">
      About
    </RouterLink>
    <RouterLink to="/blank">
      Blank
    </RouterLink>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  text-align: center;
}

/* https://v3.router.vuejs.org/api/#router-link */
nav a.router-link-exact-active {
  color: var(--color-text);
}

/* https://v3.router.vuejs.org/api/#router-link */
nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
