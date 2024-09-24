import type { SVGProps } from 'react'

const SvgWarningIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#prefix__clip0_2947_845)">
      <circle cx={6} cy={6} r={5.5} fill="#E95460" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m5.25 3 .2 4h1.1l.2-4h-1.5Zm.745 5a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0_2947_845">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgWarningIcon
