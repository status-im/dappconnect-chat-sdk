import type { SVGProps } from 'react'

const SvgNeutralIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#prefix__clip0_7275_22)">
      <circle cx={6} cy={6} r={5.5} fill="#647084" />
      <path stroke="#fff" strokeWidth={1.1} d="M3.5 6h5" />
    </g>
    <defs>
      <clipPath id="prefix__clip0_7275_22">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgNeutralIcon
