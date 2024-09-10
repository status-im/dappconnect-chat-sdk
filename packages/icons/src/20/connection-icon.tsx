import type { SVGProps } from 'react'

const SvgConnectionIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 1.9a8.1 8.1 0 0 0-7.824 6.003l1.159.311a6.9 6.9 0 0 1 13.33 0l1.159-.31A8.1 8.1 0 0 0 10 1.9Zm0 3a5.1 5.1 0 0 0-4.926 3.78l1.159.31a3.9 3.9 0 0 1 7.534 0l1.16-.31A5.1 5.1 0 0 0 10 4.9Zm0 5.2a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM6.9 12a3.1 3.1 0 1 1 3.7 3.042V17.5H9.4v-2.458A3.101 3.101 0 0 1 6.9 12Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgConnectionIcon
