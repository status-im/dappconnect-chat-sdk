import { createIcon } from '../lib/create-icon'

const SvgHistoryIcon = createIcon(props => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 20 20"
      focusable={false}
      aria-hidden={true}
    >
      <path
        fill={props.color}
        fillRule="evenodd"
        d="M7.092 2.979A7.6 7.6 0 1 1 3.418 13.8l1.04-.6a6.4 6.4 0 1 0 .25-6.8H7v1.2H2.9V3.5h1.2v1.71a7.6 7.6 0 0 1 2.992-2.231ZM10.7 6.5v3.276l2.629 1.722-.658 1.004-2.9-1.9-.271-.178V6.5h1.2Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgHistoryIcon
