import { Stack } from '@tamagui/core'

import { ContextTag } from './context-tag'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ContextTag> = {
  component: ContextTag,
  argTypes: {
    children: {
      control: 'Rarible > # channel-name',
    },
  },
}

type Story = StoryObj<typeof ContextTag>

export const Base: Story = {
  args: { children: 'ContextTag' },
  render: ({ children }) => (
    <ContextTag src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.seadn.io%2Fgae%2FFG0QJ00fN3c_FWuPeUr9-T__iQl63j9hn5d6svW8UqOmia5zp3lKHPkJuHcvhZ0f_Pd6P2COo9tt9zVUvdPxG_9BBw%3Fw%3D500%26auto%3Dformat&f=1&nofb=1&ipt=c177cd71d8d0114080cfc6efd3f9e098ddaeb1b347919bd3089bf0aacb003b3e&ipo=images">
      {children}
    </ContextTag>
  ),
}

export const AllVariants: Story = {
  args: {},
  render: () => (
    <Stack space flexDirection="row">
      <Stack space flexDirection="column">
        <ContextTag>Name</ContextTag>
        <ContextTag type="group">Group</ContextTag>
        <ContextTag type="channel" path="Rarible / # channel" />
        <ContextTag type="community">Coinbase</ContextTag>
        <ContextTag type="token">10 ETH</ContextTag>
        <ContextTag type="network">Network</ContextTag>
        <ContextTag type="account">Account Name</ContextTag>
        <ContextTag type="collectible">Collectible #123</ContextTag>
        <ContextTag type="address">0x045...1ah</ContextTag>
        <ContextTag type="icon">Context</ContextTag>
        <ContextTag type="audio">00:32</ContextTag>
      </Stack>
    </Stack>
  ),
}

export default meta
