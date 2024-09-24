import type { SVGProps } from 'react'

const SvgTimeoutIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#prefix__clip0_1711_847)">
      <path stroke="currentColor" strokeWidth={1.1} d="M11 6a5 5 0 1 1-5-5" />
    </g>
    <defs>
      <clipPath id="prefix__clip0_1711_847">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgTimeoutIcon
