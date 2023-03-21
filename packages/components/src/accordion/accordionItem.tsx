import { MutedIcon } from '@status-im/icons/20'
import { Stack, Text } from '@tamagui/core'

import { Label, Paragraph } from '../typography'

import type { Channel } from '../sidebar/mock-data'

type Props = {
  selected?: boolean
  onPress?: () => void
  channel: Channel
}

const textColor = {
  muted: '$neutral-40',
  normal: '$neutral-50',
  withMessages: '$neutral-100',
  withMentions: '$neutral-100',
}

const AccordionItem = (props: Props) => {
  const { channel, selected, onPress } = props

  const { emoji, title, channelStatus = 'normal', unreadCount } = channel

  return (
    <Stack
      accessibilityRole="button"
      animation={[
        'fast',
        {
          opacity: {
            overshootClamping: true,
          },
        },
      ]}
      backgroundColor={selected ? '$primary-50-opa-10' : 'transparent'}
      hoverStyle={{
        backgroundColor: '$primary-50-opa-5',
      }}
      borderRadius="$4"
      padding={8}
      width="100%"
      enterStyle={{ opacity: 0 }}
      exitStyle={{ opacity: 0 }}
      opacity={1}
      justifyContent={
        channelStatus === 'normal' ? 'flex-start' : 'space-between'
      }
      alignItems="center"
      flexDirection="row"
      cursor="pointer"
      onPress={onPress}
    >
      <Stack
        justifyContent="flex-start"
        alignItems="center"
        flexDirection="row"
      >
        {emoji && (
          <Stack
            width={24}
            height={24}
            borderRadius={24 / 2}
            backgroundColor="$turquoise-50-opa-10"
            justifyContent="center"
            alignItems="center"
          >
            <Text>{emoji}</Text>
          </Stack>
        )}
        <Paragraph
          color={textColor[channelStatus]}
          weight="medium"
          marginLeft={emoji ? 8 : 0}
        >
          {title}
        </Paragraph>
      </Stack>
      {channelStatus !== 'normal' && (
        <Stack>
          {channelStatus === 'withMentions' && (
            <Stack width={20} justifyContent="center" alignItems="center">
              <Stack
                backgroundColor="$turquoise-50"
                borderRadius="$4"
                width={16}
                height={16}
                justifyContent="center"
                alignItems="center"
              >
                <Label color="$white-100" weight="medium">
                  {unreadCount}
                </Label>
              </Stack>
            </Stack>
          )}
          {channelStatus === 'withMessages' && (
            <Stack
              width={20}
              height={20}
              justifyContent="center"
              alignItems="center"
            >
              <Stack
                backgroundColor="$neutral-40"
                borderRadius="$4"
                width={8}
                height={8}
                justifyContent="center"
                alignItems="center"
              />
            </Stack>
          )}
          {channelStatus === 'muted' && <MutedIcon color="$neutral-40" />}
        </Stack>
      )}
    </Stack>
  )
}

export { AccordionItem }
