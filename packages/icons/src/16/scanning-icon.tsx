import type { SVGProps } from 'react'

const SvgScanningIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.5 1.472c-.306.025-.59.057-.854.1-.877.142-1.599.407-2.133.941-.533.534-.8 1.256-.941 2.133a10.77 10.77 0 0 0-.1.854h1.204c.021-.24.048-.46.08-.662.124-.763.327-1.198.606-1.476.279-.28.713-.482 1.476-.606.203-.032.422-.059.662-.08V1.472ZM2.676 10.5H1.472c.025.306.057.59.1.854.142.877.408 1.599.941 2.133.534.533 1.256.8 2.133.941.263.043.548.075.854.1v-1.204a9.21 9.21 0 0 1-.662-.08c-.763-.124-1.197-.327-1.476-.606-.279-.279-.482-.713-.606-1.476a9.187 9.187 0 0 1-.08-.662Zm8.678 3.928c-.263.043-.548.075-.854.1v-1.204c.24-.021.46-.048.662-.08.763-.124 1.197-.327 1.476-.606.279-.279.482-.713.606-1.476.033-.203.059-.423.08-.662h1.204c-.025.306-.057.59-.1.854-.142.877-.408 1.599-.941 2.133-.534.533-1.256.8-2.133.941Zm1.89-9.59c.033.202.059.422.08.662h1.204c-.025-.306-.057-.59-.1-.854-.142-.877-.408-1.6-.941-2.133-.534-.534-1.256-.8-2.133-.941a10.768 10.768 0 0 0-.854-.1v1.204c.24.021.46.047.662.08.763.124 1.197.327 1.476.606.279.278.482.713.606 1.476ZM1 8.6h14V7.4H1v1.2Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgScanningIcon
