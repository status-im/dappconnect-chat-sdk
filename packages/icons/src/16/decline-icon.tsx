import type { SVGProps } from 'react'

const SvgDeclineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.4 8a6.6 6.6 0 1 1 13.2 0A6.6 6.6 0 0 1 1.4 8ZM8 2.6a5.4 5.4 0 1 0 0 10.8A5.4 5.4 0 0 0 8 2.6ZM8 7.15l1.576-1.575.848.848L8.85 8l1.575 1.576-.848.848L8 8.848l-1.576 1.576-.848-.848L7.15 8 5.576 6.424l.848-.848L8 7.15Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgDeclineIcon
