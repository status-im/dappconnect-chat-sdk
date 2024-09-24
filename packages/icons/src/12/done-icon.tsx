import type { SVGProps } from 'react'

const SvgDoneIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#prefix__clip0_3456_975)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.9 6a4.9 4.9 0 1 1-9.8 0 4.9 4.9 0 0 1 9.8 0ZM12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0ZM5.668 8.108l3-3.5-.836-.716-2.613 3.05-1.08-1.08-.778.777 1.5 1.5.42.42.387-.451Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0_3456_975">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgDoneIcon
