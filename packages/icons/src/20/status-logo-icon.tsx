import type { SVGProps } from 'react'

const SvgStatusLogoIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#prefix__clip0_4408_955)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.374 4.626a3.6 3.6 0 0 0-5.091 0L8.869 6.04l.848.849 1.415-1.414a2.4 2.4 0 1 1 3.394 3.394l-1.415 1.414.849.848 1.414-1.414a3.6 3.6 0 0 0 0-5.091Zm-9.9 6.505L6.89 9.717 6.04 8.87l-1.414 1.414a3.6 3.6 0 0 0 5.091 5.091l1.415-1.414-.85-.849-1.413 1.414a2.4 2.4 0 1 1-3.394-3.394Zm-.353-6.859-.848.849 10.606 10.607.849-.849L5.12 4.272Z"
        clipRule="evenodd"
      />
      <g clipPath="url(#prefix__clip1_4408_955)">
        <mask
          id="prefix__mask0_4408_955"
          width={16}
          height={17}
          x={2}
          y={1}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: 'alpha',
          }}
        >
          <path fill="#fff" d="M10 2c-6 0-8 2-8 8s2 8 8 8 8-2 8-8-2-8-8-8Z" />
        </mask>
        <g mask="url(#prefix__mask0_4408_955)">
          <g filter="url(#prefix__filter0_f_4408_955)">
            <circle cx={13.5} cy={6.5} r={9.5} fill="#1992D7" />
          </g>
          <g filter="url(#prefix__filter1_f_4408_955)">
            <circle cx={18.5} cy={11.5} r={9.5} fill="#F6B03C" />
          </g>
          <g filter="url(#prefix__filter2_f_4408_955)">
            <circle cx={4.5} cy={17.5} r={9.5} fill="#FF7D46" />
          </g>
          <g filter="url(#prefix__filter3_f_4408_955)">
            <circle cx={-1.5} cy={6.5} r={9.5} fill="#7140FD" />
          </g>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M11.064 6.404c-1.586.09-2.758 1.533-2.888 3.165A.966.966 0 0 1 8.2 9.56l.026-.007c.2-.05.404-.081.61-.092.445-.025.807.014 1.17.052.362.039.725.078 1.171.052a3.02 3.02 0 0 0 .606-.094c.84-.218 1.323-.785 1.28-1.562-.053-.966-1.026-1.561-2-1.506ZM8.94 13.595c1.586-.09 2.758-1.533 2.888-3.164a.96.96 0 0 1-.051.014c-.2.05-.404.082-.61.092-.446.025-.808-.013-1.171-.052a6.787 6.787 0 0 0-1.17-.051c-.205.01-.408.042-.606.094-.84.217-1.32.785-1.28 1.562.052.966 1.026 1.561 2 1.505Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="prefix__filter0_f_4408_955"
        width={28.43}
        height={28.43}
        x={-0.715}
        y={-7.715}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_4408_955"
          stdDeviation={2.358}
        />
      </filter>
      <filter
        id="prefix__filter1_f_4408_955"
        width={28.43}
        height={28.43}
        x={4.285}
        y={-2.715}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_4408_955"
          stdDeviation={2.358}
        />
      </filter>
      <filter
        id="prefix__filter2_f_4408_955"
        width={28.43}
        height={28.43}
        x={-9.715}
        y={3.285}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_4408_955"
          stdDeviation={2.358}
        />
      </filter>
      <filter
        id="prefix__filter3_f_4408_955"
        width={28.43}
        height={28.43}
        x={-15.715}
        y={-7.715}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_4408_955"
          stdDeviation={2.358}
        />
      </filter>
      <clipPath id="prefix__clip0_4408_955">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
      <clipPath id="prefix__clip1_4408_955">
        <path fill="#fff" d="M2 2h16v16H2z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgStatusLogoIcon
