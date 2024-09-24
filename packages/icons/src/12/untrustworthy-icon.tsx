import type { SVGProps } from 'react'

const SvgUntrustworthyIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#prefix__clip0_183_89)">
      <path
        fill="#E95460"
        d="m6 0 4.243 1.757L12 6l-1.757 4.243L6 12l-4.243-1.757L0 6l1.757-4.243L6 0Z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m5.25 3 .2 4h1.1l.2-4h-1.5Zm.745 5a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0_183_89">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgUntrustworthyIcon
