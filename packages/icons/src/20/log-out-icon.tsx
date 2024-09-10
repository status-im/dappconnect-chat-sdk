import type { SVGProps } from 'react'

const SvgLogOutIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 2.9c-1.385 0-2.528.062-3.458.255-.936.194-1.7.529-2.279 1.108-.58.58-.915 1.343-1.108 2.28C1.962 7.471 1.9 8.614 1.9 10c0 1.384.062 2.528.255 3.458.193.935.529 1.7 1.108 2.279.58.58 1.343.914 2.28 1.108.929.193 2.072.255 3.457.255v-1.2c-1.365 0-2.41-.063-3.214-.23-.799-.165-1.316-.424-1.674-.782-.358-.358-.617-.875-.782-1.674-.167-.805-.23-1.849-.23-3.214s.063-2.41.23-3.214c.165-.799.424-1.316.782-1.674.358-.358.875-.617 1.674-.782C6.59 4.163 7.635 4.1 9 4.1V2.9Zm8.452 7.495-3.5 4-.904-.79 2.63-3.005H7V9.4h8.678l-2.63-3.005.903-.79 3.5 4 .346.395-.345.395Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgLogOutIcon
