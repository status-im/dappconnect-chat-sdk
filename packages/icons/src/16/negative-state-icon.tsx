import type { SVGProps } from 'react'

const SvgNegativeStateIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <path
      stroke="#E95460"
      strokeWidth={1.2}
      d="M1.6 8a6.4 6.4 0 1 1 12.8 0A6.4 6.4 0 0 1 1.6 8Z"
      opacity={0.4}
    />
    <path
      fill="#E95460"
      fillRule="evenodd"
      d="m8.75 4-.2 5h-1.1l-.2-5h1.5ZM8 10.5A.75.75 0 1 1 8 12a.75.75 0 0 1 0-1.5Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgNegativeStateIcon
