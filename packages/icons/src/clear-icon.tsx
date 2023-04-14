import { createIcon } from '../lib/create-icon'

const SvgClearIcon = createIcon(props => {
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
        d="M2.5 10a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m9.151 10-2.075 2.076.848.848L10 10.85l2.076 2.075.848-.848L10.85 10l2.075-2.076-.848-.848L10 9.15 7.924 7.076l-.848.848L9.15 10Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgClearIcon
