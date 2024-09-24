import type { SVGProps } from 'react'

const SvgPlayIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <path
      fill="currentColor"
      d="M3.5 10c-1 0-1-8 0-8S10 5 10 6s-5.5 4-6.5 4Z"
    />
  </svg>
)
export default SvgPlayIcon
