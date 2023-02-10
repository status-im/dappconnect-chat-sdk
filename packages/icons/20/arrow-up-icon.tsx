import { Path, Svg } from 'react-native-svg'
import { useCurrentColor } from 'tamagui'

import type { SvgProps } from 'react-native-svg'

const SvgArrowUpIcon = (props: SvgProps) => {
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
        d="M10.46 3.54 10 3.08l-.46.46-5 5 .92.92 3.89-3.89V16h1.3V5.57l3.89 3.89.92-.92-5-5Z"
        fill={color}
      />
    </Svg>
  )
}
export default SvgArrowUpIcon
