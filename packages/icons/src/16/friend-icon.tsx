import type { SVGProps } from 'react'

const SvgFriendIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.1 4a1.9 1.9 0 1 1 3.8 0 1.9 1.9 0 0 1-3.8 0ZM8 .9a3.1 3.1 0 1 0 0 6.2A3.1 3.1 0 0 0 8 .9Zm4.887 13H3.113c.093-2.03.66-3.17 1.407-3.824C5.353 9.347 6.545 9.1 8 9.1s2.646.247 3.48.976c.747.654 1.314 1.794 1.407 3.824ZM8 7.9c-1.545 0-3.104.253-4.27 1.273C2.548 10.208 1.9 11.91 1.9 14.5v.6h12.2v-.6c0-2.59-.648-4.292-1.83-5.327C11.104 8.153 9.545 7.9 8 7.9Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgFriendIcon
