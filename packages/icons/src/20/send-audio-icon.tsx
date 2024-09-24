import type { SVGProps } from 'react'

const SvgSendAudioIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#prefix__clip0_6306_11)">
      <circle cx={10} cy={10} r={10} fill="var(--customisation-50, #2A4AF5)" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m10.095 5.614-.252-.23-.253.23-3.436 3.127.504.555 2.81-2.556v6.968h.75V6.74l2.809 2.556.504-.555-3.436-3.127Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0_6306_11">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgSendAudioIcon
