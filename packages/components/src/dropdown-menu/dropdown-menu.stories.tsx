import {
  CopyIcon,
  EditIcon,
  ForwardIcon,
  LinkIcon,
  PinIcon,
  ReplyIcon,
  TrashIcon,
} from '@status-im/icons'
import { action } from '@storybook/addon-actions'

import { Button } from '../button'
import { DropdownMenu } from './dropdown-menu'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DropdownMenu> = {
  title: 'Web/dropdown menu',
  component: DropdownMenu,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/IBmFKgGL1B4GzqD8LQTw6n/Design-System-for-Web?node-id=1931%3A31188&t=rOKELbVkzya48FJE-0',
    },
  },
}

type Story = StoryObj<typeof DropdownMenu>

export const Default: Story = {
  args: {},

  render: args => {
    return (
      <DropdownMenu {...args}>
        <Button>Open</Button>

        <DropdownMenu.Content sideOffset={10}>
          <DropdownMenu.Item
            icon={<EditIcon size={20} />}
            label="Edit message"
            onSelect={action('edit')}
          />
          <DropdownMenu.Item
            icon={<ReplyIcon size={20} />}
            label="Reply"
            onSelect={action('reply')}
          />
          <DropdownMenu.Item
            icon={<CopyIcon size={20} />}
            label="Copy text"
            onSelect={action('copy')}
          />
          <DropdownMenu.Item
            icon={<PinIcon size={20} />}
            label="Pin to the channel"
            onSelect={action('pin')}
          />
          <DropdownMenu.Item
            icon={<ForwardIcon size={20} />}
            label="Forward"
            onSelect={action('forward')}
          />
          <DropdownMenu.Item
            icon={<LinkIcon size={20} />}
            label="Share link to message"
            onSelect={action('share')}
          />

          <DropdownMenu.Separator />

          <DropdownMenu.Item
            icon={<TrashIcon size={20} />}
            label="Delete message"
            danger
            onSelect={action('delete')}
          />
        </DropdownMenu.Content>
      </DropdownMenu>
    )
  },
}

export default meta
