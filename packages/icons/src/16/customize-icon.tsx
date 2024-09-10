import type { SVGProps } from 'react'

const SvgCustomizeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.138 2.138C2.273 2.004 2.4 1.717 2.4 1h1.2c0 .717.127 1.004.262 1.138.134.135.421.262 1.138.262v1.2c-.717 0-1.004.127-1.138.262C3.727 3.996 3.6 4.283 3.6 5H2.4c0-.717-.127-1.004-.262-1.138C2.004 3.727 1.717 3.6 1 3.6V2.4c.717 0 1.004-.127 1.138-.262ZM8 4.293A7.378 7.378 0 0 1 4.293 8 7.378 7.378 0 0 1 8 11.707 7.378 7.378 0 0 1 11.707 8 7.378 7.378 0 0 1 8 4.293ZM1.5 8.6c3.169 0 5.9 2.731 5.9 5.9h1.2c0-3.169 2.731-5.9 5.9-5.9V7.4c-3.169 0-5.9-2.731-5.9-5.9H7.4c0 3.169-2.731 5.9-5.9 5.9v1.2Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgCustomizeIcon
