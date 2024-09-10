import type { SVGProps } from 'react'

const SvgImageIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.347 6.2C3.163 7.148 3.1 8.381 3.1 10v.335c.12-.06.252-.122.394-.182C4.454 9.74 5.916 9.35 8 9.35c2.838 0 4.758 1.989 5.922 3.799a15.39 15.39 0 0 1 1.452 2.93c.146-.096.275-.201.39-.316.415-.416.707-1.021.889-1.963.184-.948.247-2.181.247-3.8 0-1.619-.063-2.852-.247-3.8-.182-.942-.474-1.547-.89-1.963-.416-.416-1.021-.708-1.963-.89-.948-.184-2.181-.247-3.8-.247-1.62 0-2.852.063-3.8.247-.942.182-1.548.474-1.963.89-.416.416-.708 1.021-.89 1.963Zm0 7.6c-.108-.555-.174-1.208-.21-1.979l.03-.02c.169-.118.443-.284.839-.454.79-.338 2.077-.697 3.994-.697 2.162 0 3.742 1.512 4.828 3.202a14.094 14.094 0 0 1 1.342 2.72c-.117.029-.24.056-.37.081-.948.184-2.181.247-3.8.247-1.62 0-2.852-.063-3.8-.247-.942-.182-1.548-.474-1.963-.89-.416-.416-.708-1.021-.89-1.963ZM5.972 2.169C7.039 1.962 8.369 1.9 10 1.9c1.63 0 2.96.062 4.028.269 1.074.208 1.937.573 2.584 1.22.646.646 1.011 1.51 1.22 2.583.206 1.067.268 2.397.268 4.028 0 1.631-.062 2.96-.269 4.028-.208 1.074-.573 1.937-1.22 2.584-.646.647-1.51 1.011-2.583 1.22-1.067.206-2.397.268-4.028.268-1.631 0-2.96-.062-4.028-.269-1.074-.208-1.937-.572-2.584-1.22-.647-.646-1.011-1.51-1.22-2.583C1.963 12.961 1.9 11.631 1.9 10c0-1.631.062-2.96.269-4.028.208-1.074.572-1.937 1.22-2.584.646-.646 1.509-1.011 2.583-1.22ZM13 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgImageIcon
