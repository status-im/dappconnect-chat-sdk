import type { SVGProps } from 'react'

const SvgPauseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      fill="#09101C"
      fillRule="evenodd"
      d="M4.573 2.16C5 2.468 5 3.368 5 6c0 2.632 0 3.532-.427 3.84-.222.16-.56.16-1.073.16-.513 0-.85 0-1.073-.16C2 9.532 2 8.632 2 6c0-2.632 0-3.532.427-3.84C2.65 2 2.987 2 3.5 2c.513 0 .85 0 1.073.16Zm5 0C10 2.468 10 3.368 10 6c0 2.632 0 3.532-.427 3.84-.222.16-.56.16-1.073.16C7 10 7 10 7 6s0-4 1.5-4c.513 0 .85 0 1.073.16Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgPauseIcon
