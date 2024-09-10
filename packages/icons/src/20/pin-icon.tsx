import type { SVGProps } from 'react'

const SvgPinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#09101C"
      fillRule="evenodd"
      d="M8.785 8.047c.626-1.083 1.122-1.887 1.548-2.471.431-.59.755-.906 1.02-1.063a.883.883 0 0 1 .7-.107c.305.067.68.244 1.219.555.538.31.888.552 1.108.79a.97.97 0 0 1 .29.694c.005.313-.095.756-.38 1.425-.283.663-.724 1.496-1.348 2.577l-.085.148.005.17.114 3.62-7.65-4.416 3.219-1.69.154-.082.086-.15Zm5.087-4.125c-.544-.314-1.06-.578-1.562-.688a2.078 2.078 0 0 0-1.569.247c-.477.282-.917.756-1.377 1.388-.444.609-.94 1.41-1.53 2.427l-4.03 2.117-.963.506.943.545 4.235 2.445L5.577 17h1.44l2.046-3.487 4.247 2.452.933.539-.033-1.078-.143-4.526c.587-1.023 1.03-1.86 1.326-2.559.31-.724.486-1.352.476-1.916-.01-.6-.23-1.08-.608-1.488-.354-.383-.845-.7-1.39-1.014Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgPinIcon
