import type { SVGProps } from 'react'

const SvgFocalPointIcon = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeWidth={1.2}
      d="M2 8c0-5.5.5-6 6-6s6 .5 6 6-.5 6-6 6-6-.5-6-6ZM8 14v-2M8 4V2M2 8h2M12 8h2"
    />
  </svg>
)
export default SvgFocalPointIcon
