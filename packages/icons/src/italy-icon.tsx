import { createIcon } from '../lib/create-icon'

const SvgItalyIcon = createIcon(props => {
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
        fill="#CE2B37"
        d="M20 15a2.222 2.222 0 0 1-2.222 2.222h-4.445V2.778h4.445C19.005 2.778 20 3.773 20 5v10Z"
      />
      <path
        fill="#009246"
        d="M2.222 2.778A2.222 2.222 0 0 0 0 5v10c0 1.227.995 2.222 2.222 2.222h4.445V2.778H2.222Z"
      />
      <path fill="#EEE" d="M6.667 2.778h6.666v14.444H6.667V2.778Z" />
    </svg>
  )
})

export default SvgItalyIcon
