import type { SVGProps } from 'react'

const SvgAttachIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#prefix__clip0_6677_30)">
      <path
        fill="#09101C"
        fillRule="evenodd"
        d="M12.486 2.096a3.1 3.1 0 0 0-4.384 0l-2.97 2.97L3.33 6.869a4.35 4.35 0 0 0 6.152 6.152l3.359-3.36-.849-.848-3.358 3.359a3.15 3.15 0 1 1-4.455-4.455L6.83 5.066l2.12-2.122a1.9 1.9 0 1 1 2.688 2.687l-2.97 2.97-1.803 1.803a.65.65 0 0 1-.92-.92l4.774-4.772-.849-.849-4.773 4.773a1.85 1.85 0 1 0 2.617 2.617l1.944-1.945 2.829-2.828a3.1 3.1 0 0 0 0-4.384Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0_6677_30">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgAttachIcon
