import { createIcon } from '../lib/create-icon'

const SvgSuperareIcon = createIcon(props => {
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
      <g clipPath="url(#superare-icon_svg__a)">
        <path
          fill="#fff"
          d="M10 0c8.667 0 10 1.333 10 10s-1.333 10-10 10S0 18.667 0 10 1.333 0 10 0Z"
        />
        <path
          fill={props.color}
          fillRule="evenodd"
          d="M3.5 8.28c0-1.31.89-2.53 2.993-2.53.764 0 1.694.136 2.204.245v2.52h-.069c-.93-1.769-1.791-2.52-2.634-2.52-.786 0-1.3.477-1.3 1.202 0 .556.279.952 1.086 1.33l1.766.838c1.227.568 1.683 1.278 1.683 2.33 0 1.659-1.104 2.805-2.837 2.805-.865 0-1.994-.158-2.628-.33v-2.937h.069c.731 1.853 1.643 3.007 2.783 3.007.861 0 1.397-.462 1.397-1.304 0-.568-.268-1.07-1.064-1.425l-1.672-.769C4.108 10.207 3.5 9.358 3.5 8.281Zm10.826 1.858 2.001 3.165h-.003c.3.476.579.75.926.893v.074h-2.41l-2.338-3.894h-.214v2.447c.004.802.272 1.223.956 1.373v.074H9.556v-.074c.626-.16.81-.67.81-1.395V7.413c0-.725-.188-1.234-.81-1.395v-.07h3.59c2.255 0 3.008.865 3.008 2.114 0 .933-.728 1.845-1.828 2.076Zm-2.038-.022h.326v-.003c1.068 0 1.538-.704 1.538-2.019 0-1.069-.34-1.86-1.455-1.86h-.409v3.882Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="superare-icon_svg__a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})

export default SvgSuperareIcon
