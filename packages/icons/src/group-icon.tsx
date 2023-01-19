import { memo } from 'react'

import { themed } from '@status-im/icons/src/themed'
import { Path, Svg } from 'react-native-svg'

import type { IconProps } from './types'

function Icon(props: IconProps) {
  const { color, size = 16, ...otherProps } = props

  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.6 5a1.9 1.9 0 1 1 3.8 0 1.9 1.9 0 0 1-3.8 0Zm1.9-3.1a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2ZM5 8.9a3.6 3.6 0 0 0-3.6 3.6A1.6 1.6 0 0 0 3 14.1h6a1.6 1.6 0 0 0 1.6-1.6A3.6 3.6 0 0 0 7 8.9H5Zm-2.4 3.6A2.4 2.4 0 0 1 5 10.1h2a2.4 2.4 0 0 1 2.4 2.4.4.4 0 0 1-.4.4H3a.4.4 0 0 1-.4-.4Z"
        fill={color}
      />
      <Path
        d="M10 3.1a1.9 1.9 0 0 1 0 3.8v1.2a3.1 3.1 0 0 0 0-6.2v1.2ZM11 10.1h.5a2.4 2.4 0 0 1 2.4 2.4.4.4 0 0 1-.4.4h-2v1.2h2a1.6 1.6 0 0 0 1.6-1.6 3.6 3.6 0 0 0-3.6-3.6H11v1.2Z"
        fill={color}
      />
    </Svg>
  )
}

export const GroupIcon = memo<IconProps>(themed(Icon))
