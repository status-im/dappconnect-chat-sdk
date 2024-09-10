import type { SVGProps } from 'react'

const SvgHoldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <circle cx={10} cy={10} r={7} fill="#23ADA0" />
    <path stroke="#fff" strokeWidth={1.2} d="m7.25 10.75 2 1.5 3.5-4.5" />
  </svg>
)
export default SvgHoldIcon
