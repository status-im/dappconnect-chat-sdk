import type { SVGProps } from 'react'

const SvgGitIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    viewBox="0 0 12 12"
    {...props}
  >
    <g clipPath="url(#prefix__clip0_3460_940)">
      <path
        fill="#09101C"
        fillRule="evenodd"
        d="M2.5 3.9a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Zm0 1.1c.491 0 .95-.142 1.336-.386l.973.973a4 4 0 1 0 .778-.778l-.973-.973A2.5 2.5 0 1 0 2.5 5Zm8.4 3a2.9 2.9 0 1 1-5.8 0 2.9 2.9 0 0 1 5.8 0Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0_3460_940">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgGitIcon
