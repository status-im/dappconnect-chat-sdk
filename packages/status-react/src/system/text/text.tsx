import { styled, theme } from '~/src/styles/config'

import type React from 'react'

const Text = styled('div', {
  fontFamily: theme.fonts.sans,

  variants: {
    size: {
      '10': {
        fontSize: '10px',
      },
      '12': {
        fontSize: '12px',
      },
      '14': {
        fontSize: '14px',
      },
    },
    color: {
      gray: {
        color: '#939BA1',
      },
    },
    weight: {
      '400': {
        fontWeight: theme.fontWeights[400],
      },
      '500': {
        fontWeight: theme.fontWeights[500],
      },
      '600': {
        fontWeight: theme.fontWeights[600],
      },
    },
    align: {
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
      center: {
        textAlign: 'center',
      },
    },
    transform: {
      uppercase: {
        textTransform: 'uppercase',
      },
      lowercase: {
        textTransform: 'lowercase',
      },
      capitalize: {
        textTransform: 'capitalize',
      },
    },
    truncate: {
      true: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        // minWidth: 0,
        // maxWidth: '100%',
        flex: 1,
      },
    },
  },

  defaultVariants: {
    align: 'left',
    weight: '400',
  },

  // compoundVariants: {},
})

export { Text }
export type TextProps = React.ComponentProps<typeof Text>
