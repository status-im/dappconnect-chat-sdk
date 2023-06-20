import { createIcon } from '../lib/create-icon'

const SvgFacebookIcon = createIcon(props => {
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
      <g clipPath="url(#facebook-icon_svg__a)">
        <circle cx={10} cy={10} r={10} fill={props.color} />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M11.563 19.879a10.073 10.073 0 0 1-3.126 0v-6.91H5.899v-2.908h2.54V7.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.909h-2.33v6.909Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="facebook-icon_svg__a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})

export default SvgFacebookIcon
