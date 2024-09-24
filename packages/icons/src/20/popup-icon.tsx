import type { SVGProps } from 'react'

const SvgPopupIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.6 10c0-1.727.068-3.046.264-4.06.196-1.01.51-1.665.96-2.116.452-.451 1.106-.764 2.116-.96C6.955 2.667 8.273 2.6 10 2.6c1.728 0 3.046.067 4.061.264 1.01.196 1.664.509 2.115.96.451.451.765 1.106.96 2.115.197 1.015.264 2.334.264 4.061 0 1.727-.067 3.046-.264 4.06-.195 1.01-.509 1.665-.96 2.116-.451.45-1.106.764-2.115.96-1.015.197-2.333.264-4.06.264-1.728 0-3.046-.067-4.061-.264-1.01-.196-1.664-.51-2.115-.96-.452-.451-.765-1.106-.96-2.115C2.667 13.046 2.6 11.727 2.6 10ZM10 1.4c-1.739 0-3.154.066-4.289.286-1.14.221-2.053.608-2.735 1.29-.682.682-1.069 1.594-1.29 2.735C1.466 6.846 1.4 8.26 1.4 10c0 1.74.066 3.154.286 4.29.221 1.14.608 2.052 1.29 2.734.682.682 1.594 1.069 2.735 1.29 1.135.22 2.55.286 4.29.286 1.739 0 3.154-.066 4.289-.286 1.14-.221 2.053-.608 2.735-1.29.682-.682 1.068-1.594 1.29-2.735.22-1.135.285-2.55.285-4.289 0-1.74-.066-3.154-.286-4.29-.22-1.14-.607-2.052-1.29-2.734-.681-.682-1.594-1.069-2.735-1.29C13.155 1.466 11.74 1.4 10 1.4ZM9 7.6h2.552l-4.976 4.976.848.848L12.4 8.448V11h1.2V6.4H9v1.2Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgPopupIcon
