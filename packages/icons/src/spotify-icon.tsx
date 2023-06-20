import { createIcon } from '../lib/create-icon'

const SvgSpotifyIcon = createIcon(props => {
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
      <g
        fillRule="evenodd"
        clipPath="url(#spotify-icon_svg__a)"
        clipRule="evenodd"
      >
        <path
          fill={props.color}
          d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.55 0 10 0Z"
        />
        <path
          fill="#fff"
          d="M15.6 8.751C12.448 6.723 7.178 6.51 4.172 7.524c-.493.16-.986-.16-1.134-.64-.147-.534.148-1.068.592-1.228 3.497-1.121 9.261-.907 12.907 1.44.443.268.59.908.344 1.388-.246.374-.837.534-1.28.267Zm-.098 2.99c-.246.373-.69.533-1.035.266-2.66-1.761-6.7-2.295-9.803-1.228-.394.107-.837-.106-.936-.533-.098-.427.099-.908.493-1.014 3.596-1.175 8.03-.587 11.084 1.44.296.16.443.694.197 1.068Zm-1.182 2.934c-.197.32-.542.427-.838.214-2.315-1.548-5.222-1.868-8.67-1.014-.345.107-.64-.16-.739-.48-.099-.374.148-.694.443-.801 3.744-.907 6.996-.534 9.557 1.174.345.16.394.587.247.907Z"
        />
      </g>
      <defs>
        <clipPath id="spotify-icon_svg__a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})

export default SvgSpotifyIcon
