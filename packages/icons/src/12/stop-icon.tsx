import type { SVGProps } from 'react'

const SvgStopIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    viewBox="0 0 12 12"
    aria-hidden={true}
    focusable={false}
    {...props}
  >
    <path
      fill="currentColor"
      d="M1.5 6C1.5 2 2 1.5 6 1.5s4.5.5 4.5 4.5-.5 4.5-4.5 4.5S1.5 10 1.5 6Z"
    />
  </svg>
)
export default SvgStopIcon
