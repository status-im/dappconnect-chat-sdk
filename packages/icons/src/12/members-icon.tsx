import type { SVGProps } from 'react'

const SvgMembersIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    viewBox="0 0 12 12"
    aria-hidden={true}
    focusable={false}
    {...props}
  >
    <g clipPath="url(#prefix__clip0_367_59)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 5.95c.364 0 .737.03 1.098.119-.19.147-.371.317-.543.514-.133.152-.255.284-.366.405l-.06.064A5.172 5.172 0 0 0 4 7.05c-.755 0-1.319.155-1.712.576-.356.381-.657 1.069-.724 2.324h2.899c.068-1.425.412-2.423 1.022-3.075C6.182 6.129 7.118 5.95 8 5.95c.882 0 1.818.179 2.515.925.686.733 1.035 1.903 1.035 3.625v.55H6.714v-1.1h3.722c-.068-1.255-.368-1.943-.724-2.324-.394-.42-.957-.576-1.712-.576s-1.319.155-1.712.576c-.405.433-.738 1.263-.738 2.874v.55H.45v-.55c0-1.722.349-2.892 1.035-3.625C2.182 6.129 3.118 5.95 4 5.95ZM5.2 3c0-.489.125-.948.345-1.348a2.05 2.05 0 1 0 0 2.695C5.325 3.947 5.2 3.488 5.2 3ZM3.05 3a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0ZM8 2.05a.95.95 0 1 0 0 1.9.95.95 0 0 0 0-1.9ZM5.95 3a2.05 2.05 0 1 1 4.1 0 2.05 2.05 0 0 1-4.1 0Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0_367_59">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgMembersIcon
