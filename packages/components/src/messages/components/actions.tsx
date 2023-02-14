import { useEffect } from 'react'

import {
  AddReactionIcon,
  CopyIcon,
  DeleteIcon,
  EditIcon,
  ForwardIcon,
  LinkIcon,
  OptionsIcon,
  PinIcon,
  ReplyIcon,
} from '@status-im/icons/20'
import { Stack } from 'tamagui'

import { DropdownMenu } from '../../dropdown-menu'
import { IconButton } from '../../icon-button'
import { ReactionPopover } from './reaction-popover'

import type { ReactionsType } from '../types'

interface Props {
  reactions: ReactionsType
  onOpenChange: (open: boolean) => void
  onReplyPress: VoidFunction
  // onEditPress: VoidFunction
  // onDeletePress: VoidFunction
}

export const Actions = (props: Props) => {
  const { reactions, onOpenChange, onReplyPress } = props

  useEffect(() => {
    return () => onOpenChange(false)
  }, [onOpenChange])

  return (
    <Stack
      backgroundColor="$white-100"
      borderWidth={1}
      borderColor="$neutral-10"
      borderRadius={12}
      padding={2}
      space={2}
      overflow="hidden"
      position="absolute"
      top={-16}
      right={0}
      flexDirection="row"
      shadowRadius={20}
      shadowOffset={{ width: 0, height: 4 }}
      shadowColor="rgba(9, 16, 28, 0.08)"
      zIndex={10}
    >
      {/* REACTION */}
      <ReactionPopover
        reactions={reactions}
        side="left"
        sideOffset={6}
        onOpenChange={onOpenChange}
      >
        <IconButton variant="outline" icon={<AddReactionIcon />} />
      </ReactionPopover>

      {/* REPLY */}
      <IconButton
        variant="outline"
        icon={<ReplyIcon />}
        onPress={onReplyPress}
      />

      {/* EDIT */}
      {/* <IconButton
        variant="outline"
        icon={<EditIcon />}
        onPress={onEditPress}
      /> */}

      {/* DELETE */}
      {/* <IconButton
        variant="outline"
        icon={<DeleteIcon />}
        onPress={onDeletePress}
      /> */}

      {/* OPTIONS MENU */}
      <DropdownMenu modal={false} onOpenChange={onOpenChange}>
        <IconButton variant="outline" icon={<OptionsIcon />} />
        <DropdownMenu.Content align="end" sideOffset={10}>
          <DropdownMenu.Item
            icon={<EditIcon />}
            label="Edit message"
            onSelect={() => console.log('edit')}
          />
          <DropdownMenu.Item
            icon={<ReplyIcon />}
            label="Reply"
            onSelect={() => console.log('reply')}
          />
          <DropdownMenu.Item
            icon={<CopyIcon />}
            label="Copy text"
            onSelect={() => console.log('copy')}
          />
          <DropdownMenu.Item
            icon={<PinIcon />}
            label="Pin to the channel"
            onSelect={() => console.log('pin')}
          />
          <DropdownMenu.Item
            icon={<ForwardIcon />}
            label="Forward"
            onSelect={() => console.log('forward')}
          />
          <DropdownMenu.Item
            icon={<LinkIcon />}
            label="Share link to message"
            onSelect={() => console.log('share')}
          />

          <DropdownMenu.Separator />

          <DropdownMenu.Item
            icon={<DeleteIcon />}
            label="Delete message"
            danger
            onSelect={() => console.log('delete')}
          />
        </DropdownMenu.Content>
      </DropdownMenu>
    </Stack>
  )
}
