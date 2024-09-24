import type { SVGProps } from 'react'

const SvgTravelIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.401 2.9H6.4v3.5h-2v4.334l-2.09.697-.493.164.093.512L2.5 12l-.59.108v.003l.002.006.003.017a3.013 3.013 0 0 0 .061.257 8.002 8.002 0 0 0 1.362 2.726C4.505 16.627 6.55 18.1 10 18.1c3.45 0 5.496-1.473 6.663-2.983a8.005 8.005 0 0 0 1.14-2.045 7.08 7.08 0 0 0 .27-.88l.008-.036.005-.022.003-.017.001-.006v-.002c0-.001 0-.002-.59-.109l.59.107.094-.512-.494-.164-2.09-.697V6.4h-2V2.9h-2.999V1.5h-1.2v1.4Zm4.999 7.434V7.6H5.6v2.734l4.21-1.403.19-.063.19.063 4.21 1.403Zm-2-3.934H7.6V4.1h4.8v2.3Zm-1.798 3.933V14h-1.2v-3.668L3.228 12.39a6.805 6.805 0 0 0 1.06 1.993C5.245 15.623 6.95 16.9 10 16.9s4.755-1.277 5.713-2.517a6.803 6.803 0 0 0 1.06-1.993l-6.171-2.057Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgTravelIcon
