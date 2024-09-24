import type { SVGProps } from 'react'

const SvgLinkIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#prefix__clip0_3596_957)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.146 2.853a1.95 1.95 0 0 0-2.757 0l-1.06 1.06-.779-.777 1.06-1.06a3.05 3.05 0 1 1 4.314 4.313l-1.06 1.06-.778-.777 1.06-1.061a1.95 1.95 0 0 0 0-2.758Zm-4.95 4.172 2.83-2.828.777.778-2.828 2.828-.778-.778ZM2.854 6.39l1.06-1.06-.777-.779-1.06 1.06a3.05 3.05 0 1 0 4.313 4.314l1.06-1.06-.777-.778-1.061 1.06A1.95 1.95 0 1 1 2.853 6.39Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0_3596_957">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgLinkIcon
