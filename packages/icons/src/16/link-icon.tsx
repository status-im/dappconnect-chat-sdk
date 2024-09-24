import type { SVGProps } from 'react'

const SvgLinkIcon = (props: SVGProps<SVGSVGElement>) => (
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
      fill="currentColor"
      fillRule="evenodd"
      d="M11.733 3.525c.287.205.538.455.742.742a2.244 2.244 0 0 1-.239 2.891L10.404 8.99l.848.848 1.832-1.831a3.444 3.444 0 0 0 .368-4.438 4.39 4.39 0 0 0-1.021-1.02 3.444 3.444 0 0 0-4.438.367L6.161 4.747l.849.849 1.832-1.832a2.244 2.244 0 0 1 2.891-.24Zm-7.97 5.317L4.89 7.717 4.04 6.87 2.915 7.993a3.444 3.444 0 0 0-.367 4.438c.282.394.627.74 1.021 1.021a3.444 3.444 0 0 0 4.437-.367l1.125-1.125-.848-.849-1.125 1.125a2.244 2.244 0 0 1-2.891.24 3.19 3.19 0 0 1-.742-.743 2.244 2.244 0 0 1 .239-2.891Zm5.58-3.034L5.809 9.344l.849.848 3.535-3.535-.848-.849Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgLinkIcon
