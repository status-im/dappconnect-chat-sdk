import { styled } from '@tamagui/core'
import { View } from 'react-native'

import { Text } from '../text'

import type { ColorTokens } from '@tamagui/core'

export type CounterVariants = 'default' | 'grey' | 'secondary' | 'outline'

type Props = {
  value: number
  type?: CounterVariants
}

const Counter = (props: Props) => {
  const { value, type = 'default' } = props

  return (
    <Base type={type}>
      <Text size={11} weight="medium" color={textColors[type]}>
        {value > 99 ? '99+' : value}
      </Text>
    </Base>
  )
}

export { Counter }
export type { Props as CounterProps }

const Base = styled(View, {
  backgroundColor: '$primary-50',
  paddingHorizontal: 3,
  paddingVertical: 0,
  borderRadius: 6, // TODO: use tokens when fixed its definition
  height: 16,
  minWidth: 16,
  maxWidth: 28,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexBasis: 'fit-content',
  borderWidth: 1,
  borderColor: 'transparent',

  variants: {
    type: {
      default: {
        backgroundColor: '$primary-50',
      },
      secondary: {
        backgroundColor: '$neutral-80-opa-5',
      },
      grey: {
        backgroundColor: '$neutral-10',
      },
      outline: {
        backgroundColor: 'transparent',
        borderColor: '$neutral-20',
      },
    },
  },
})

const textColors: Record<NonNullable<Props['type']>, ColorTokens> = {
  default: '$white-100',
  secondary: '$neutral-100',
  outline: '$neutral-100',
  grey: '$neutral-100',
}
