import type { SVGProps } from 'react'

const SvgWorldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    aria-hidden={true}
    focusable={false}
    {...props}
  >
    <g clipPath="url(#prefix__clip0_2111_955)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.847 3.809A5.881 5.881 0 0 1 7.4 2.13v1.499l-1.668.834-.18.09-.089.178-.018.036-1.598-.958ZM2.1 7.999c0-1.202.36-2.32.977-3.253l1.83 1.098-.944 1.887-.092.185.04.201.5 2.5.079.393.392.078 2.5.5.853.17-.143-.857-.45-2.695.782-.782.544-.543-.66-.396-1.79-1.074 1.75-.875.332-.165V2.13c1.18.12 2.256.585 3.126 1.295l-1.65 1.65-.425.425.425.424.72.72-.853 2.133-.247.617.64.183 3.035.867A5.9 5.9 0 0 1 2.1 8Zm11.655 1.307a5.92 5.92 0 0 0-1.18-5.032L11.348 5.5l.576.576.28.28-.147.367-.753 1.883 2.45.7ZM.9 8a7.1 7.1 0 1 1 14.2 0A7.1 7.1 0 0 1 .9 8Zm5.04-1.537-.811 1.621.38 1.906 1.256.251-.357-2.143-.05-.304.218-.218.456-.457-1.093-.656Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0_2111_955">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgWorldIcon
