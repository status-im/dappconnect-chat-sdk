import type { SVGProps } from 'react'

const SvgForwardIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.695 7.6H7.5a3.9 3.9 0 0 0-3.9 3.9V13H2.4v-1.5a5.1 5.1 0 0 1 5.1-5.1h4.195l-2.15-2.51.91-.78 3 3.5.335.39-.334.39-3 3.5-.912-.78 2.151-2.51Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgForwardIcon
