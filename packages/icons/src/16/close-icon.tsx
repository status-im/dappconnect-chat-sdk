import type { SVGProps } from 'react'

const SvgCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#09101C"
      fillRule="evenodd"
      d="m8 8.848 3.576 3.576.848-.848L8.848 8l3.576-3.576-.848-.848L8 7.15 4.424 3.576l-.848.848L7.15 8l-3.575 3.576.848.848L8 8.848Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgCloseIcon
