import { Path, Svg } from 'react-native-svg'
import { useCurrentColor } from 'tamagui'

import type { SvgProps } from 'react-native-svg'

const SvgAudioIcon = (props: SvgProps) => {
  const { color: colorToken = 'currentColor', ...rest } = props
  const color = useCurrentColor(colorToken)
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2.35A3.65 3.65 0 0 0 6.35 6v3a3.65 3.65 0 0 0 7.3 0V6A3.65 3.65 0 0 0 10 2.35ZM7.65 6a2.35 2.35 0 1 1 4.7 0v3a2.35 2.35 0 1 1-4.7 0V6Zm-2.5 1.5V9a4.85 4.85 0 1 0 9.7 0V7.5h1.3V9a6.15 6.15 0 0 1-5.5 6.116v1.234H12v1.3H8v-1.3h1.35v-1.234A6.15 6.15 0 0 1 3.85 9V7.5h1.3Z"
        fill={color}
      />
    </Svg>
  )
}
export default SvgAudioIcon
