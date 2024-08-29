import { defineComponent } from 'vue'

import '~/styles/app.css'
import Placeholder from '~/components/Placeholder.vue'

const toolbarTemplate = `
<header class="bg-background flex h-9 items-center px-2 space-x-1 rounded-none border-b border-gray-200 shadow-sm lg:px-4">
  <div class="flex w-full items-center">
    <h2 class="p-2 text-sm font-semibold">Vue App</h2>
    <!-- desktop display -->
    <div class="hidden justify-between gap-2 md:flex md:grow md:items-center">
      <div class="flex">
        <button class="relative flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-gray-100">
          File
        </button>
        <button class="relative flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-gray-100">
          Edit
        </button>
        <button class="relative flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-gray-100">
          View
        </button>
        <button class="relative flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-gray-100">
          Account
        </button>
      </div>
      <button type="button" class="ring-gray-300 focus:ring-ring rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-xicon size-4"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg><span class="sr-only">Close</span>
      </button>
    </div>
  </div>
  <div>
    <!-- mobile display -->
    <div class="flex md:hidden">
      <button type="button" class="ring-gray-300 focus:ring-ring rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical-icon size-4"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg><span class="sr-only">More</span>
      </button>
    </div>
  </div>
</header>
`

const Toolbar = defineComponent({
  name: 'BasicHeader',
  components: { Placeholder },

  setup() {
    return { Placeholder }
  },

  template: toolbarTemplate,
})

export default {
  title: 'Layout/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
}

/**
 * Toolbar is a grouping component for buttons and other content.
 */
export const Default = {
  parameters: {
    layout: 'fullscreen',

    docs: {
      source: {
        code: toolbarTemplate,
      },

      story: {
        inline: false,
        height: '108px',
      },
    },
  },

  render: args => ({
    components: { Placeholder },

    setup() {
      return { args }
    },

    template: toolbarTemplate,
  }),
}

const toolbarThreeColumnsTemplate = `
<header class="bg-background flex h-9 items-center px-2 space-x-1 rounded-none border-b border-gray-200 shadow-sm lg:px-4">
  <div class="flex w-full items-center">
    <h2 class="p-2 text-sm font-semibold md:hidden">Vue App</h2>
    <!-- desktop display -->
    <div class="hidden justify-between gap-2 md:flex md:grow md:items-center">
      <div class="flex">
        <button class="relative flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-gray-100">
          File
        </button>
        <button class="relative flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-gray-100">
          Edit
        </button>
        <button class="relative flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-gray-100">
          View
        </button>
        <button class="relative flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-gray-100">
          Account
        </button>
      </div>
      <h2 class="absolute left-1/2 transform -translate-x-1/2 p-2 text-sm font-semibold">Vue App</h2>
      <button type="button" class="ring-gray-300 focus:ring-ring rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-xicon size-4"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg><span class="sr-only">Close</span>
      </button>
    </div>
  </div>
  <div>
    <!-- mobile display -->
    <div class="flex w-full items-center md:hidden">
      <button type="button" class="ring-gray-300 focus:ring-ring rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical-icon size-4"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg><span class="sr-only">More</span>
      </button>
    </div>
  </div>
</header>
`

/**
 * Toolbar is a grouping component for buttons and other content.
 */
export const ToolbarWithThreeColumns = {
  parameters: {
    layout: 'fullscreen',

    docs: {
      source: {
        code: toolbarThreeColumnsTemplate,
      },

      story: {
        inline: false,
        height: '108px',
      },
    },
  },

  render: args => ({
    components: { Placeholder },

    setup() {
      return { args }
    },

    template: toolbarThreeColumnsTemplate,
  }),
}

const toolbarButtonTemplate = `
<button class="relative flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-gray-100">
  File
</button>
`

/**
 * The toolbar button that opens a menu.
 */
export const ToolbarButton = {
  parameters: {
    docs: {
      source: {
        code: toolbarButtonTemplate,
      },
    },
  },

  render: () => ({
    template: toolbarButtonTemplate,
  }),
}

const toolbarMenuIconButtonTemplate = `
<button type="button" class="ring-gray-300 focus:ring-ring rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical-icon size-4"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg><span class="sr-only">More</span>
</button>
`

export const ToolbarMenuIconButton = {
  parameters: {
    docs: {
      source: {
        code: toolbarMenuIconButtonTemplate,
      },
    },
  },

  render: () => ({
    template: toolbarMenuIconButtonTemplate,
  }),
}

const toolbarCloseButtonTemplate = `
<button type="button" class="ring-gray-300 focus:ring-ring rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-xicon size-4"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg><span class="sr-only">Close</span>
</button>
`
/**
 * Close button
 */
export const ToolbarCloseButton = {
  parameters: {
    docs: {
      source: {
        code: toolbarCloseButtonTemplate,
      },
    },
  },

  render: () => ({
    template: toolbarCloseButtonTemplate,
  }),
}
