import { Path, Svg } from 'react-native-svg'
import { useCurrentColor } from 'tamagui'

import type { SvgProps } from 'react-native-svg'

const SvgSeedIcon = (props: SvgProps) => {
  const { color: colorToken = 'currentColor', ...rest } = props
  const color = useCurrentColor(colorToken)
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 3.765C1 3.342 1.336 3 1.75 3H8.5c.414 0 .75.342.75.765a.757.757 0 0 1-.75.764H1.75A.757.757 0 0 1 1 3.765ZM11 3.765c0-.423.336-.765.75-.765h6.5c.414 0 .75.342.75.765a.757.757 0 0 1-.75.764h-6.5a.757.757 0 0 1-.75-.764ZM14 7.588c0-.422.336-.764.75-.764h3.5c.414 0 .75.342.75.764a.757.757 0 0 1-.75.765h-3.5a.757.757 0 0 1-.75-.765ZM6 11.412a.757.757 0 0 0-.75-.765h-3.5a.757.757 0 0 0-.75.765c0 .422.336.764.75.764h3.5c.414 0 .75-.342.75-.764ZM1 7.588c0-.422.336-.764.75-.764h9.75c.414 0 .75.342.75.764a.757.757 0 0 1-.75.765H1.75A.757.757 0 0 1 1 7.588ZM19 11.412a.757.757 0 0 0-.75-.765H8.5a.757.757 0 0 0-.75.765c0 .422.336.764.75.764h9.75c.414 0 .75-.342.75-.764ZM1 15.235c0-.422.336-.764.75-.764H8.5c.414 0 .75.342.75.764A.757.757 0 0 1 8.5 16H1.75a.757.757 0 0 1-.75-.765ZM11 15.235c0-.422.336-.764.75-.764h6.5c.414 0 .75.342.75.764a.757.757 0 0 1-.75.765h-6.5a.757.757 0 0 1-.75-.765Z"
        fill={color}
      />
    </Svg>
  )
}
export default SvgSeedIcon
