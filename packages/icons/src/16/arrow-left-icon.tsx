import type { SVGProps } from 'react'

const SvgArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#09101C"
      fillRule="evenodd"
      d="m6.531 2.625-4 5-.3.375.3.375 4 5 .937-.75L4.248 8.6H13V7.4H4.248l3.22-4.025-.937-.75Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgArrowLeftIcon
