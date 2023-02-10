import { Path, Svg } from 'react-native-svg'
import { useCurrentColor } from 'tamagui'

import type { SvgProps } from 'react-native-svg'

const SvgAddUserIcon = (props: SvgProps) => {
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
        d="M8.15 6a1.85 1.85 0 1 1 3.7 0 1.85 1.85 0 0 1-3.7 0ZM10 2.85a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3Zm-2.25 8.8a3.1 3.1 0 0 0-3.1 3.1.6.6 0 0 0 .6.6H11v1.3H5.25a1.9 1.9 0 0 1-1.9-1.9 4.4 4.4 0 0 1 4.4-4.4H11v1.3H7.75Zm5.6 2.5V16h1.3v-1.85h1.85v-1.3h-1.85V11h-1.3v1.85H11.5v1.3h1.85Z"
        fill={color}
      />
    </Svg>
  )
}
export default SvgAddUserIcon
