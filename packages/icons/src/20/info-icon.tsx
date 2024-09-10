import type { SVGProps } from 'react'

const SvgInfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#09101C"
      fillRule="evenodd"
      d="M3.6 10a6.4 6.4 0 1 1 12.8 0 6.4 6.4 0 0 1-12.8 0ZM10 2.4a7.6 7.6 0 1 0 0 15.2 7.6 7.6 0 0 0 0-15.2Zm-.55 6.1-.2 6h1.5l-.2-6h-1.1Zm-.2-2.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgInfoIcon
