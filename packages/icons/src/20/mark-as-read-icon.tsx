import type { SVGProps } from 'react'

const SvgMarkAsReadIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.5 1.6a3.9 3.9 0 1 0 0 7.8 3.9 3.9 0 0 0 0-7.8ZM9.4 5.5a5.1 5.1 0 1 1 10.2 0 5.1 5.1 0 0 1-10.2 0Zm7.522-1.398-2.5 3-.385.463-.426-.426-1.5-1.5.778-.778 1.074 1.074 2.115-2.537.845.704Zm.91 9.926c.193-1.001.26-2.232.267-3.727-.372.28-.777.516-1.209.704-.023 1.138-.093 2.053-.237 2.795-.182.942-.474 1.547-.89 1.963-.416.416-1.021.708-1.963.89-.948.184-2.181.247-3.8.247-1.62 0-2.852-.063-3.8-.247-.942-.182-1.548-.474-1.963-.89-.416-.416-.708-1.021-.89-1.963-.184-.948-.247-2.181-.247-3.8 0-1.62.063-2.852.247-3.8.182-.942.474-1.548.89-1.963.415-.416 1.021-.708 1.963-.89.741-.144 1.657-.214 2.795-.238.188-.431.425-.837.704-1.208-1.494.007-2.726.074-3.727.268-1.074.208-1.937.572-2.584 1.22-.647.646-1.011 1.509-1.22 2.583C1.963 7.039 1.9 8.369 1.9 10c0 1.63.062 2.96.269 4.028.208 1.074.572 1.937 1.22 2.584.646.646 1.509 1.011 2.583 1.22 1.067.206 2.397.268 4.028.268 1.63 0 2.96-.062 4.028-.269 1.074-.208 1.937-.573 2.584-1.22.646-.646 1.011-1.51 1.22-2.583Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgMarkAsReadIcon
