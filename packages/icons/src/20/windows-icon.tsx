import type { SVGProps } from 'react'

const SvgWindowsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m2.5 4.624 6.13-.832.003 5.894-6.127.035L2.5 4.624Zm6.127 5.741.005 5.9-6.127-.84v-5.1l6.122.04Zm.743-6.682L17.498 2.5v7.111l-8.128.064V3.683Zm8.13 6.738-.002 7.079-8.128-1.144-.011-5.948 8.141.013Z"
    />
  </svg>
)
export default SvgWindowsIcon
