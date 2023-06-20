import { createIcon } from '../lib/create-icon'

const SvgRaribleIcon = createIcon(props => {
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
      <g clipPath="url(#rarible-icon_svg__a)">
        <path
          fill={props.color}
          d="M10 0c8.667 0 10 1.333 10 10s-1.333 10-10 10S0 18.667 0 10 1.333 0 10 0Z"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M13.7 9.974c.63-.173 1.19-.67 1.19-1.67 0-1.666-1.338-2.054-3.055-2.054H5v7.5h2.877v-2.545h3.413c.526 0 .833.22.833.764v1.781H15v-1.875c0-1.021-.546-1.665-1.3-1.901Zm-1.932-1.629h-3.89v1.023h3.907a.498.498 0 0 0 .484-.511.498.498 0 0 0-.484-.512h-.017Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="rarible-icon_svg__a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})

export default SvgRaribleIcon
