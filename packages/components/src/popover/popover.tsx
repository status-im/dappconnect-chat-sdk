import { Content, Portal, Root, Trigger } from '@radix-ui/react-popover'
import { Stack } from 'tamagui'

import type { PopoverContentProps } from '@radix-ui/react-popover'
import type { FunctionComponent } from 'react'

interface Props {
  children: [React.ReactElement, React.ReactElement]
  onOpenChange?: (open: boolean) => void
  modal?: false
  side?: PopoverContentProps['side']
  sideOffset?: PopoverContentProps['sideOffset']
  align?: PopoverContentProps['align']
  alignOffset?: PopoverContentProps['alignOffset']
}

const Popover = (props: Props) => {
  const { children, onOpenChange, modal, ...contentProps } = props

  const [trigger, content] = children

  return (
    <Root onOpenChange={onOpenChange} modal={modal}>
      <Trigger asChild>{trigger}</Trigger>
      <Portal>
        <Content {...contentProps}>{content}</Content>
      </Portal>
    </Root>
  )
}

const PopoverContent: FunctionComponent = props => {
  const { children } = props

  return (
    <Stack
      backgroundColor="$white-100"
      borderRadius={12}
      shadowRadius={30}
      shadowOffset="0px 8px"
      shadowColor="rgba(9, 16, 28, 0.12)"
    >
      {children}
    </Stack>
  )
}

Popover.Content = PopoverContent

export { Popover as Popover }
export type { Props as PopoverProps }
