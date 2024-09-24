import type { SVGProps } from 'react'

const SvgWebIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 1.4c-1.397 0-2.517.03-3.395.172-.882.142-1.604.407-2.132.944-.529.537-.783 1.261-.916 2.136C1.424 5.523 1.4 6.629 1.4 8c0 1.37.024 2.476.157 3.348.133.875.387 1.599.916 2.135.528.537 1.25.803 2.132.945.878.142 1.998.172 3.395.172 1.398 0 2.517-.03 3.396-.172.881-.142 1.603-.408 2.132-.945.528-.536.782-1.26.915-2.135.133-.872.157-1.978.157-3.348 0-1.37-.024-2.477-.157-3.348-.133-.875-.387-1.6-.915-2.136-.53-.537-1.25-.802-2.133-.944C10.518 1.43 9.399 1.4 8 1.4ZM2.6 8c0-1.38.026-2.399.143-3.168.117-.766.313-1.198.585-1.474.27-.275.7-.478 1.468-.602C5.567 2.632 6.598 2.6 8 2.6c1.403 0 2.433.032 3.205.156.768.124 1.197.327 1.468.602.271.276.467.708.584 1.474.117.77.143 1.788.143 3.168 0 1.38-.026 2.398-.143 3.167-.117.766-.313 1.198-.584 1.474-.271.276-.7.479-1.468.602-.772.125-1.802.157-3.205.157-1.402 0-2.433-.032-3.204-.157-.769-.123-1.197-.326-1.468-.602-.272-.276-.468-.708-.585-1.474C2.626 10.398 2.6 9.38 2.6 8Zm1.9-2.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm2.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm1.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgWebIcon
