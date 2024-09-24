import type { SVGProps } from 'react'

const SvgHideIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    aria-hidden={true}
    focusable={false}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m14.07 14.989 2.97 2.97.92-.919-15-15-.92.92 2.796 2.795c-.432.335-.823.687-1.17 1.035a14.783 14.783 0 0 0-2.082 2.635 8.66 8.66 0 0 0-.142.242l-.009.015-.002.004v.002H1.43L2 10l-.57-.311-.17.311.17.311L2 10l-.57.312.001.002.002.004.009.015a4.752 4.752 0 0 0 .142.242 14.78 14.78 0 0 0 2.082 2.635c1.43 1.43 3.587 2.94 6.334 2.94 1.554 0 2.918-.483 4.07-1.161Zm-.955-.955L11.6 12.52c-.429.39-.973.63-1.6.63-1.591 0-2.65-1.553-2.65-3.15 0-.499.103-.993.294-1.437l-1.88-1.88c-.43.321-.824.671-1.18 1.027A13.483 13.483 0 0 0 2.758 10a13.482 13.482 0 0 0 1.828 2.29c1.319 1.32 3.163 2.56 5.415 2.56 1.15 0 2.194-.323 3.115-.816ZM8.681 9.6c-.02.126-.03.26-.03.4 0 1.165.731 1.85 1.35 1.85.222 0 .46-.09.672-.258L8.681 9.6Zm8.239.888c-.265.38-.627.856-1.078 1.354l.92.92a14.969 14.969 0 0 0 1.654-2.187 8.51 8.51 0 0 0 .135-.228l.008-.014.008-.015.002-.004.001-.002L18 10l.57.311.17-.311-.17-.311L18 10l.57-.312v-.002l-.003-.004-.009-.015a12.967 12.967 0 0 0-.572-.898 14.775 14.775 0 0 0-1.651-1.979C14.904 5.36 12.747 3.85 10 3.85c-.67 0-1.305.09-1.903.247l1.105 1.105c.26-.034.526-.052.798-.052 2.253 0 4.097 1.24 5.415 2.56A13.479 13.479 0 0 1 17.244 10c-.081.13-.19.296-.323.488Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgHideIcon
