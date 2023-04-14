import { LoadingIcon, TrashIcon } from '@status-im/icons'
import { Stack } from 'tamagui'

import { IconAvatar } from '../../avatar'
import { Button } from '../../button'
import { Text } from '../../text'

import type { SystemMessageState } from '../system-message'

type Props = {
  timestamp: string
  text: string
  action?: {
    label: string
    onPress: () => void
  }
  state: SystemMessageState
}

const DeletedMessageContent = (props: Props) => {
  const { timestamp, text, action, state } = props

  return (
    <>
      <IconAvatar
        backgroundColor={state === 'landed' ? '$transparent' : '$red-50-opa-5'}
        color="$neutral-100"
      >
        <TrashIcon size={20} />
      </IconAvatar>
      <Stack
        flexDirection="row"
        gap={2}
        justifyContent="space-between"
        flexBasis="max-content"
        flexGrow={1}
      >
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          flexGrow={1}
        >
          <Stack flexDirection="row" gap={8} alignItems="baseline">
            <Text size={13}>{text}</Text>
            <Text size={11} color="$neutral-50">
              {timestamp}
            </Text>
          </Stack>
          {action && (
            <Button
              onPress={action.onPress}
              variant="darkGrey"
              size={24}
              icon={<LoadingIcon size={12} />}
            >
              {action.label}
            </Button>
          )}
        </Stack>
      </Stack>
    </>
  )
}

export { DeletedMessageContent }
