import type { SVGProps } from 'react'

const SvgRedoIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#prefix__clip0_6516_70)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.404 1.777a4.45 4.45 0 1 0 1.743 7.37l.778.777a5.55 5.55 0 1 1 .025-7.823V.5h1.1v3.55H7.5v-1.1h1.74a4.45 4.45 0 0 0-1.836-1.173ZM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0_6516_70">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgRedoIcon
