import type { SVGProps } from 'react'

const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      fill="currentColor"
      fillRule="evenodd"
      d="M3.1 7a3.9 3.9 0 1 1 7.8 0 3.9 3.9 0 0 1-7.8 0ZM7 1.9a5.1 5.1 0 1 0 3.157 9.106l2.919 2.918.848-.848-2.918-2.919A5.1 5.1 0 0 0 7 1.9Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgSearchIcon
