# Vite + Vue 3 Single Page Application

Opinionated Vite + Vue 3 starter template with [TailwindCSS](https://tailwindcss.com/). This template should help get you started developing Vue 3 Single Page Application in Vite.

Inspired by [Vitesse](https://github.com/antfu/vitesse), [Vitailse](https://github.com/hi-reeve/vitailse), and [Vuesion](https://github.com/vuesion/vuesion).

---

## Table Of Contents

- [Features](#Features)
- [Pre-installed Packages](#pre-installed-packages)
  - [UI Frameworks](#ui-frameworks)
  - [Plugins](#plugins)
  - [Dev Tools](#dev-tools)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Checklist](#checklist)
- [Usage](#usage)
  - [Recommended IDE Setup](#recommended-ide-setup)
  - [Development](#development)
  - [Build](#build)
  - [Preview](#preview)
  - [Other Available Scripts](#other)

---

## Features

- ⚡️ [Vite 2](https://github.com/vitejs/vite), [ESBuild](https://github.com/evanw/esbuild), [Vue 3](https://github.com/vuejs/vue-next)

  <li>
    <img src="https://th.bing.com/th?id=ODLS.095f9b22-a70b-47ed-bdb1-070466f08dc4&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2" height="16" width="16" alt="Tailwindcss Icon" class="rms_img" data-bm="42">&nbsp; <a href="https://tailwindcss.com/">Tailwind Css</a>
  </li>

- 🍍 [State Management via Pinia](https://pinia.esm.dev/)

- 📑 [Layout system](./src/layouts)

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

  <li>
     <img src="https://th.bing.com/th?id=ODLS.3408c44a-9dc6-431c-ab53-7985c9dee8e7&amp;w=32&amp;h=32&amp;qlt=90&amp;pcl=fffffa&amp;o=6&amp;pid=1.2" height="16" width="16" alt="Global web icon" class="rms_img" data-bm="52"> &nbsp;
    <a href="https://eslint.org/">ESLint</a> with <a href="https://github.com/antfu/eslint-config/">@antfu/eslint-config</a>
  </li>

## Pre-installed Packages

### UI Frameworks

- [TailwindCSS](https://tailwindcss.com/)
  - [TailwindCSS Aspect Ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)
  - [TailwindCSS Forms](https://github.com/tailwindlabs/tailwindcss-forms)
  - [TailwindCSS Typography](https://github.com/tailwindlabs/tailwindcss-typography)

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
- [Pinia](https://pinia.esm.dev) - Intuitive, type safe, light and flexible Store for Vue using the composition api

### Linting and Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227). Check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

- Auto formating using [Antony Fu ESLint config styling](https://github.com/antfu/eslint-config?tab=readme-ov-file#antfueslint-config)

### Dev tools

- [Vue DevTools](https://devtools-next.vuejs.org/)
- [Chrome Extension](https://chromewebstore.google.com/detail/vuejs-devtools/iaajmlceplecbljialhhkmedjlpdblhp)

## Getting Started

### Installation

To use GitHub Template, create a repo from this [template on GitHub](https://github.com/acfatah/vue-app/generate).

If you prefer to clone it to local with the cleaner git history, you can use `degit`.

```bash
npx degit acfatah/vue-app my-vue-app && \
  cd $_ && \
  npm install
```

### Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Rename `name` field in `package.json`
- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `App.vue`
- [ ] Change the favicon in `public`
- [ ] Remove the `.github` folder which may contains unrelevant info
- [ ] Clean up the READMEs and remove unused routes

## Usage

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 `<script setup>` IDE support
  - [TailwindCSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - IDE support for Tailwind CSS
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support

### Development

Just run and visit http://localhost:5173

> The port number may be different

```bash
npm run dev
```

### Build

To build the App, run

```bash
npm run build
```

And you will see the generated file in `dist` that ready to be served.

### Preview

Just run the following and visit https://localhost

```bash
npm run build && npm run serve
```

### Other Available Scripts

- `npm run lint`: Lint files
- `npm run lint:fix`: Lint files and fix them
- `npm run update`: Update dependencies according to [semver](https://semver.org/)
