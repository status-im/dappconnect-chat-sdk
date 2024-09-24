import type { SVGProps } from 'react'

const SvgOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M5.45 1v4.5h1.1V1h-1.1Zm2.525 1.58a3.95 3.95 0 1 1-3.95 0l-.55-.954a5.05 5.05 0 1 0 5.05 0l-.55.953Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgOffIcon
