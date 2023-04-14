import { createIcon } from '../lib/create-icon'

const SvgOptionsCircleIcon = createIcon(props => {
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
        fill="#647084"
        fillRule="evenodd"
        d="M10 1.9a8.1 8.1 0 1 0 0 16.2 8.1 8.1 0 0 0 0-16.2Zm-4 9.35a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM11.25 10a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM14 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgOptionsCircleIcon
