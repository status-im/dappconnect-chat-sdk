import { createIcon } from '../lib/create-icon'

const SvgArrowLeftIcon = createIcon(props => {
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
        d="m8.056 4.097-5 5.5-.367.403.367.404 5 5.5.888-.807L4.856 10.6H16V9.4H4.856l4.088-4.496-.888-.807Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgArrowLeftIcon
