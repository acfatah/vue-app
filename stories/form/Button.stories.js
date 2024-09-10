import '~/styles/app.css'
import ButtonPrimaryComponent from '~/components/ButtonPrimary.vue'
import ButtonPrimarySource from '~/components/ButtonPrimary.vue?raw'
import ButtonSecondaryComponent from '~/components/ButtonSecondary.vue'
import ButtonSecondarySource from '~/components/ButtonSecondary.vue?raw'
import ButtonAccentComponent from '~/components/ButtonAccent.vue'
import ButtonAccentSource from '~/components/ButtonAccent.vue?raw'
import ButtonStatusComponent from '~/components/ButtonStatus.vue'
import ButtonStatusSource from '~/components/ButtonStatus.vue?raw'
import ButtonOutlineComponent from '~/components/ButtonOutline.vue'
import ButtonOutlineSource from '~/components/ButtonOutline.vue?raw'
import ButtonGhostComponent from '~/components/ButtonGhost.vue'
import ButtonGhostSource from '~/components/ButtonGhost.vue?raw'
import ButtonLinkComponent from '~/components/ButtonLink.vue'
import ButtonLinkSource from '~/components/ButtonLink.vue?raw'

export default {
  title: 'Form/Button',
  component: ButtonPrimaryComponent,
  tags: ['autodocs'],
}

export const PrimaryButton = {
  parameters: {
    docs: {
      source: {
        code: ButtonPrimarySource,
      },
    },
  },

  args: {
    slotContent: 'Button',
  },

  render: args => ({
    components: { ButtonPrimaryComponent },

    setup() {
      const heights = ['h-6', 'h-8', 'h-10', 'h-12', 'h-14', 'h-16']

      return { ButtonPrimaryComponent, args, heights }
    },

    template: `
      <div class="flex flex-col items-start">
        <template v-for="height in heights">
          <div class="flex flex-col min-h-20 items-center">
            <ButtonPrimaryComponent v-bind="args" :class="height">
              {{ args.slotContent }}
            </ButtonPrimaryComponent>

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
        code: ButtonSecondarySource,
      },
    },
  },

  args: {
    slotContent: 'Button',
  },

  render: args => ({
    components: { ButtonSecondaryComponent },

    setup() {
      const heights = ['h-6', 'h-8', 'h-10', 'h-12', 'h-14', 'h-16']

      return { ButtonSecondaryComponent, args, heights }
    },

    template: `
      <div class="flex flex-col items-start">
        <template v-for="height in heights">
          <div class="flex flex-col min-h-20 items-center">
            <ButtonSecondaryComponent v-bind="args" :class="height">
              {{ args.slotContent }}
            </ButtonSecondaryComponent>

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
        code: ButtonAccentSource,
      },
    },
  },

  args: {
    slotContent: 'Button',
  },

  render: args => ({
    components: { ButtonAccentComponent },

    setup() {
      const heights = ['h-6', 'h-8', 'h-10', 'h-12', 'h-14', 'h-16']

      return { ButtonAccentComponent, args, heights }
    },

    template: `
      <div class="flex flex-col items-start">
        <template v-for="height in heights">
          <div class="flex flex-col min-h-20 items-center">
            <ButtonAccentComponent v-bind="args" :class="height">
              {{ args.slotContent }}
            </ButtonAccentComponent>

            <span class="text-xs">{{ height }}</span>
          </div>
        </template>
      </div>
    `,
  }),
}

export const StatusButton = {
  args: {
    slotContent: 'Button',
    disabled: false,
  },

  argTypes: {
    status: {
      options: ['success', 'info', 'warning', 'error', 'default'],
      control: { type: 'select' },
    },
  },

  parameters: {
    docs: {
      source: {
        code: ButtonStatusSource,
      },
    },
  },

  render: args => ({
    components: { ButtonStatusComponent },

    setup() {
      const heights = ['h-6', 'h-8', 'h-10', 'h-12', 'h-14', 'h-16']

      return { ButtonStatusComponent, args, heights }
    },

    template: `
      <div class="flex flex-col items-start">
        <template v-for="height in heights">
          <div class="flex flex-col min-h-20 items-center">
            <ButtonStatusComponent v-bind="args" :class="height">
              {{ args.slotContent }}
            </ButtonStatusComponent>

            <span class="text-xs">{{ height }}</span>
          </div>
        </template>
      </div>
    `,
  }),
}

export const Outline = {
  args: {
    slotContent: 'Button',
    disabled: false,
  },

  parameters: {
    docs: {
      source: {
        code: ButtonOutlineSource,
      },
    },
  },

  render: args => ({
    components: { ButtonOutlineComponent },

    setup() {
      const heights = ['h-6', 'h-8', 'h-10', 'h-12', 'h-14', 'h-16']

      return { ButtonOutlineComponent, args, heights }
    },

    template: `
      <div class="flex flex-col items-start">
        <template v-for="height in heights">
          <div class="flex flex-col min-h-20 items-center">
            <ButtonOutlineComponent v-bind="args" :class="height">
              {{ args.slotContent }}
            </ButtonOutlineComponent>

            <span class="text-xs">{{ height }}</span>
          </div>
        </template>
      </div>
    `,
  }),
}

export const Ghost = {
  args: {
    slotContent: 'Button',
    disabled: false,
  },

  parameters: {
    docs: {
      source: {
        code: ButtonGhostSource,
      },
    },
  },

  render: args => ({
    components: { ButtonGhostComponent },

    setup() {
      const heights = ['h-6', 'h-8', 'h-10', 'h-12', 'h-14', 'h-16']

      return { ButtonGhostComponent, args, heights }
    },

    template: `
      <div class="flex flex-col items-start">
        <template v-for="height in heights">
          <div class="flex flex-col min-h-20 items-center">
            <ButtonGhostComponent v-bind="args" :class="height">
              {{ args.slotContent }}
            </ButtonGhostComponent>

            <span class="text-xs">{{ height }}</span>
          </div>
        </template>
      </div>
    `,
  }),
}

export const Link = {
  args: {
    slotContent: 'Button',
    disabled: false,
  },

  parameters: {
    docs: {
      source: {
        code: ButtonLinkSource,
      },
    },
  },

  render: args => ({
    components: { ButtonLinkComponent },

    setup() {
      return { ButtonLinkComponent, args }
    },

    template: `
      <ButtonLinkComponent v-bind="args">
        {{ args.slotContent }}
      </ButtonLinkComponent>
    `,
  }),
}
