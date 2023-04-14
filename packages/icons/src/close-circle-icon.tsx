import { createIcon } from '../lib/create-icon'

const SvgCloseCircleIcon = createIcon(props => {
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
        d="M10 3.4a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2ZM4.6 10a5.4 5.4 0 1 1 10.8 0 5.4 5.4 0 0 1-10.8 0Zm2.476 2.076L9.152 10 7.076 7.924l.848-.848L10 9.15l2.076-2.075.848.848L10.85 10l2.075 2.076-.848.848L10 10.85l-2.076 2.075-.848-.848Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgCloseCircleIcon
