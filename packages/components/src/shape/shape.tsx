import { Stack, styled } from '@tamagui/core'

export const Shape = styled(Stack, {
  backgroundColor: '$primary',
  width: 100,
  height: 100,
  cursor: 'pointer',
  animation: 'fast',
  borderRadius: '$4',
  hoverStyle: {
    backgroundColor: '$primaryHover',
  },
  pressStyle: {
    backgroundColor: '$primaryHover',
  },
})
