import { createIcon } from '../lib/create-icon'

const SvgConfettiIcon = createIcon(props => {
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
      <g clipPath="url(#confetti-icon_svg__a)">
        <path
          stroke={props.color}
          strokeWidth={1.2}
          d="M7.646 5.782c-.353.354-4.242 11.314-4.242 11.314s10.96-3.889 11.313-4.242c.354-.354.354-2.475-2.12-4.95C10.12 5.429 8 5.429 7.646 5.782Z"
        />
        <path
          stroke={props.color}
          strokeWidth={1.2}
          d="M7.646 5.782s-.353 2.475 2.122 4.95c2.475 2.475 4.95 2.122 4.95 2.122"
        />
        <path
          fill={props.color}
          fillRule="evenodd"
          d="M10.546 14.197 6.303 9.954l-.848.849 4.242 4.242.849-.848Zm-2.475 1.06L5.242 12.43l-.848.849 2.828 2.828.849-.848Z"
          clipRule="evenodd"
        />
        <circle cx={14.362} cy={10.312} r={1} fill="#647084" opacity={0.8} />
        <circle cx={8.787} cy={3.165} r={1.5} fill="#647084" opacity={0.4} />
        <circle cx={16.545} cy={4.165} r={1} fill="#647084" opacity={0.6} />
        <circle cx={11.751} cy={7.031} r={1.5} fill="#647084" opacity={0.8} />
        <circle cx={12.47} cy={3.446} r={1} fill="#647084" opacity={0.4} />
        <circle cx={16.715} cy={7.897} r={1.5} fill="#647084" opacity={0.6} />
      </g>
      <defs>
        <clipPath id="confetti-icon_svg__a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})

export default SvgConfettiIcon
