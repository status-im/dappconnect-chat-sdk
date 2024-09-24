import type { SVGProps } from 'react'

const SvgFormatIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.1 10c0-1.619.063-2.852.247-3.8.182-.942.474-1.547.89-1.963.415-.416 1.021-.708 1.963-.89.948-.184 2.18-.247 3.8-.247 1.619 0 2.852.063 3.8.247.942.182 1.547.474 1.963.89.416.416.708 1.021.89 1.963.184.948.247 2.181.247 3.8 0 1.619-.063 2.852-.247 3.8-.182.942-.474 1.547-.89 1.963-.416.416-1.021.708-1.963.89-.948.184-2.181.247-3.8.247-1.62 0-2.852-.063-3.8-.247-.942-.182-1.548-.474-1.963-.89-.416-.416-.708-1.021-.89-1.963-.184-.948-.247-2.181-.247-3.8ZM10 1.9c-1.631 0-2.96.062-4.028.269-1.074.208-1.937.573-2.584 1.22-.647.646-1.011 1.51-1.22 2.583C1.963 7.039 1.9 8.369 1.9 10c0 1.631.062 2.96.269 4.028.208 1.074.572 1.937 1.22 2.584.646.647 1.509 1.011 2.583 1.22 1.067.206 2.397.268 4.028.268 1.63 0 2.96-.062 4.028-.269 1.074-.208 1.937-.572 2.584-1.22.646-.646 1.011-1.51 1.22-2.583.206-1.067.268-2.397.268-4.028 0-1.631-.062-2.96-.269-4.028-.208-1.074-.573-1.937-1.22-2.584-.646-.646-1.51-1.011-2.583-1.22C12.961 1.963 11.631 1.9 10 1.9ZM7.5 6.4h-.6v2.1h1.2v-.9h1.3v4.3h-.9v1.2h3v-1.2h-.9V7.6h1.3v.9h1.2V6.4H7.5Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgFormatIcon
