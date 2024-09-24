import type { SVGProps } from 'react'

const SvgCheckCircleIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#prefix__clip0_2946_860)">
      <circle cx={6} cy={6} r={5.5} fill="#23ADA0" />
      <path stroke="#fff" strokeWidth={1.1} d="m3.75 6.25 1.5 1.5 3-3.5" />
    </g>
    <defs>
      <clipPath id="prefix__clip0_2946_860">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCheckCircleIcon
