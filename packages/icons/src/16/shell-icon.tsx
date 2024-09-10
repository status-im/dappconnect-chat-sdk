import type { SVGProps } from 'react'

const SvgShellIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#09101C"
      fillRule="evenodd"
      d="M13.4 8c0 .04-.024.17-.15.409a5.709 5.709 0 0 1-.532.794c-.465.6-1.105 1.28-1.784 1.924-.255.242-.513.476-.767.697l.124-.25c.794-1.645 1.578-4.011 1.767-7.137A5.38 5.38 0 0 1 13.4 8Zm-2.504-4.558c-.065 3.427-.881 5.943-1.686 7.61-.208.431-.416.806-.61 1.125V2.633a5.368 5.368 0 0 1 2.296.809ZM7.4 2.633v9.544c-.194-.32-.402-.694-.61-1.125-.804-1.667-1.62-4.183-1.686-7.61A5.367 5.367 0 0 1 7.4 2.633Zm-2.333 8.494c.255.242.513.476.766.697a15.104 15.104 0 0 1-.123-.25C4.916 9.928 4.13 7.562 3.943 4.436A5.38 5.38 0 0 0 2.6 8c0 .04.025.17.15.409.12.225.299.493.532.794.465.6 1.106 1.28 1.785 1.924ZM8 14.6c.164 0 .318-.046.432-.09.124-.047.253-.11.382-.181.258-.144.555-.341.868-.572a22.77 22.77 0 0 0 2.077-1.759c.706-.669 1.392-1.395 1.908-2.06.257-.332.481-.661.644-.97.155-.293.29-.633.29-.968A6.6 6.6 0 1 0 1.4 8c0 .335.133.675.288.969.163.308.387.637.645.969.515.665 1.202 1.391 1.907 2.06a22.77 22.77 0 0 0 2.077 1.759c.314.23.61.428.868.572.13.071.258.134.382.181.114.044.268.09.432.09Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgShellIcon
