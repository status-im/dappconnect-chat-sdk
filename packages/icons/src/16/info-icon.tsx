import type { SVGProps } from 'react'

const SvgInfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    aria-hidden={true}
    focusable={false}
    {...props}
  >
    <g clipPath="url(#prefix__clip0_529_33)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 .9a7.1 7.1 0 1 0 0 14.2A7.1 7.1 0 0 0 8 .9ZM2.1 8a5.9 5.9 0 1 1 11.8 0A5.9 5.9 0 0 1 2.1 8Zm5.35-1-.2 5h1.5l-.2-5h-1.1Zm-.2-2.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0_529_33">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgInfoIcon
