import '~/styles/app.css'
import PrimaryButtonComponent from '~/components/PrimaryButton.vue'
import PrimaryButtonSource from '~/components/PrimaryButton.vue?raw'
import SecondaryButtonComponent from '~/components/SecondaryButton.vue'
import SecondaryButtonSource from '~/components/SecondaryButton.vue?raw'
import AccentButtonComponent from '~/components/AccentButton.vue'
import AccentButtonSource from '~/components/AccentButton.vue?raw'
import OutlineButtonComponent from '~/components/OutlineButton.vue'
import OutlineButtonSource from '~/components/OutlineButton.vue?raw'
import GhostButtonComponent from '~/components/GhostButton.vue'
import GhostButtonSource from '~/components/GhostButton.vue?raw'
import LinkButtonComponent from '~/components/LinkButton.vue'
import LinkButtonSource from '~/components/LinkButton.vue?raw'

export default {
  title: 'Form/Button',
  component: PrimaryButtonComponent,
  tags: ['autodocs'],
}

export const PrimaryButton = {
  title: 'Primary Button',
  parameters: {
    docs: {
      source: {
        code: PrimaryButtonSource,
      },
    },
  },

  render: args => ({
    components: { PrimaryButtonComponent },

    setup() {
      const heights = ['h-6', 'h-8', 'h-10', 'h-12', 'h-14', 'h-16']

      return { PrimaryButtonComponent, args, heights }
    },

    template: `
      <div class="flex flex-col items-start">
        <template v-for="height in heights">
          <div class="flex flex-col min-h-20 items-center">
            <PrimaryButtonComponent v-bind="args" :class="height" />

            <span class="text-xs">{{ height }}</span>
          </div>
        </template>
      </div>
    `,
  }),
}

export const SecondaryButton = {
  parameters: {
    docs: {
      source: {
        code: SecondaryButtonSource,
      },
    },
  },

  render: args => ({
    components: { SecondaryButtonComponent },

    setup() {
      const heights = ['h-6', 'h-8', 'h-10', 'h-12', 'h-14', 'h-16']

      return { SecondaryButtonComponent, args, heights }
    },

    template: `
      <div class="flex flex-col items-start">
        <template v-for="height in heights">
          <div class="flex flex-col min-h-20 items-center">
            <SecondaryButtonComponent v-bind="args" :class="height" />

            <span class="text-xs">{{ height }}</span>
          </div>
        </template>
      </div>
    `,
  }),
}

export const AccentButton = {
  parameters: {
    docs: {
      source: {
        code: AccentButtonSource,
      },
    },
  },

  render: args => ({
    components: { AccentButtonComponent },

    setup() {
      const heights = ['h-6', 'h-8', 'h-10', 'h-12', 'h-14', 'h-16']

      return { AccentButtonComponent, args, heights }
    },

    template: `
      <div class="flex flex-col items-start">
        <template v-for="height in heights">
          <div class="flex flex-col min-h-20 items-center">
            <AccentButtonComponent v-bind="args" :class="height" />

            <span class="text-xs">{{ height }}</span>
          </div>
        </template>
      </div>
    `,
  }),
}

export const Outline = {
  args: {
    disabled: false,
  },

  parameters: {
    docs: {
      source: {
        code: OutlineButtonSource,
      },
    },
  },

  render: args => ({
    components: { OutlineButtonComponent },

    setup() {
      const heights = ['h-6', 'h-8', 'h-10', 'h-12', 'h-14', 'h-16']

      return { OutlineButtonComponent, args, heights }
    },

    template: `
      <div class="flex flex-col items-start">
        <template v-for="height in heights">
          <div class="flex flex-col min-h-20 items-center">
            <OutlineButtonComponent v-bind="args" :class="height" />

            <span class="text-xs">{{ height }}</span>
          </div>
        </template>
      </div>
    `,
  }),
}

export const Ghost = {
  args: {
    disabled: false,
  },

  parameters: {
    docs: {
      source: {
        code: GhostButtonSource,
      },
    },
  },

  render: args => ({
    components: { GhostButtonComponent },

    setup() {
      const heights = ['h-6', 'h-8', 'h-10', 'h-12', 'h-14', 'h-16']

      return { GhostButtonComponent, args, heights }
    },

    template: `
      <div class="flex flex-col items-start">
        <template v-for="height in heights">
          <div class="flex flex-col min-h-20 items-center">
            <GhostButtonComponent v-bind="args" :class="height" />

            <span class="text-xs">{{ height }}</span>
          </div>
        </template>
      </div>
    `,
  }),
}

export const Link = {
  args: {
    disabled: false,
  },

  parameters: {
    docs: {
      source: {
        code: LinkButtonSource,
      },
    },
  },

  render: args => ({
    components: { LinkButtonComponent },

    setup() {
      return { LinkButtonComponent, args }
    },

    template: `
      <LinkButtonComponent v-bind="args" />
    `,
  }),
}
