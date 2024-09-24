import type { SVGProps } from 'react'

const SvgClearIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    aria-hidden={true}
    focusable={false}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m9.151 10-2.075 2.076.848.848L10 10.85l2.076 2.075.848-.848L10.85 10l2.075-2.076-.848-.848L10 9.15 7.924 7.076l-.848.848L9.15 10Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgClearIcon
