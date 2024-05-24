import { createIcon } from '../lib/create-icon'

const SvgReportingIcon = createIcon(props => {
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
        d="M2.6 8c0-.755.628-1.6 2.012-2.292C5.96 5.034 7.864 4.6 10 4.6c.579 0 1.14.032 1.679.092L6.624 11.01a9.685 9.685 0 0 1-2.012-.718C3.228 9.6 2.6 8.755 2.6 8ZM1.4 8c0-1.454 1.164-2.61 2.675-3.365C5.623 3.86 7.718 3.4 10 3.4c2.283 0 4.378.461 5.926 1.235C17.437 5.39 18.6 6.545 18.6 8v4.078c0 .44 0 .765-.201 1.247a2.549 2.549 0 0 1-.27.509c-.096.135-.198.234-.282.318l-.011.01C16.807 15.175 14.54 16.6 10 16.6c-4.54 0-6.807-1.425-7.835-2.438l-.011-.01c-.085-.084-.186-.183-.282-.318a2.55 2.55 0 0 1-.27-.509c-.202-.482-.202-.807-.202-1.247V8Zm16 2.384a6.668 6.668 0 0 1-1.474.981C14.378 12.14 12.283 12.6 10 12.6c-.83 0-1.636-.061-2.4-.176v2.817c.705.1 1.501.159 2.4.159 4.268 0 6.218-1.329 6.994-2.093.097-.095.128-.128.158-.17.03-.04.07-.11.14-.275.105-.251.108-.368.108-.806v-1.672Zm-11 4.628c-1.86-.452-2.882-1.201-3.393-1.705a1.318 1.318 0 0 1-.158-.17c-.03-.04-.071-.11-.14-.275-.105-.251-.109-.368-.109-.806v-1.672c.42.377.924.706 1.475.981.68.34 1.465.62 2.325.826v2.821Zm1.558-3.749 2.13-2.663h7.184c-.247.582-.857 1.179-1.883 1.692C14.04 10.966 12.137 11.4 10 11.4c-.71 0-1.395-.048-2.042-.137ZM17.272 7.4H11.05l1.99-2.488c.892.192 1.688.465 2.35.796 1.026.513 1.636 1.11 1.883 1.692Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgReportingIcon
