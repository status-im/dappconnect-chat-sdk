import { createIcon } from '../lib/create-icon'

const SvgZoomInIcon = createIcon(props => {
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
        d="M9 3.1a5.9 5.9 0 1 0 0 11.8A5.9 5.9 0 0 0 9 3.1ZM1.9 9a7.1 7.1 0 1 1 12.527 4.578l3.497 3.498-.848.848-3.498-3.497A7.1 7.1 0 0 1 1.9 9Zm6.5 3V9.6H6V8.4h2.4V6h1.2v2.4H12v1.2H9.6V12H8.4Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgZoomInIcon
