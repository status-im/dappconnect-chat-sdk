import type { SVGProps } from 'react'

const SvgAlertIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#prefix__clip0_2283_851)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.55 6a4.45 4.45 0 1 1 8.9 0 4.45 4.45 0 0 1-8.9 0ZM6 .45a5.55 5.55 0 1 0 0 11.1A5.55 5.55 0 0 0 6 .45ZM5.45 7l-.2-4h1.5l-.2 4h-1.1Zm1.17 1.625a.625.625 0 1 0-1.25 0 .625.625 0 0 0 1.25 0Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0_2283_851">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgAlertIcon
