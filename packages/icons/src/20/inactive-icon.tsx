import type { SVGProps } from 'react'

const SvgInactiveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#09101C"
      fillRule="evenodd"
      d="M3.838 6.493C3.663 7.369 3.6 8.508 3.6 10s.063 2.63.238 3.507c.174.87.45 1.432.836 1.819.387.387.948.662 1.819.836.876.175 2.015.238 3.507.238s2.63-.063 3.507-.238c.87-.174 1.432-.45 1.819-.836.386-.387.662-.948.836-1.819.175-.876.238-2.015.238-3.507s-.063-2.63-.238-3.507c-.174-.87-.45-1.432-.836-1.819-.387-.387-.949-.662-1.819-.836C12.631 3.663 11.492 3.6 10 3.6s-2.63.063-3.507.238c-.87.174-1.432.45-1.819.836-.387.387-.662.948-.836 1.819Zm2.42-3.831C7.255 2.462 8.491 2.4 10 2.4s2.744.062 3.743.262c1.004.2 1.818.55 2.431 1.164.613.613.963 1.427 1.164 2.431.2.999.262 2.235.262 3.743s-.062 2.744-.262 3.743c-.2 1.004-.55 1.818-1.164 2.431-.613.614-1.427.963-2.431 1.164-.999.2-2.235.262-3.743.262s-2.744-.062-3.743-.262c-1.004-.2-1.818-.55-2.431-1.164-.614-.613-.964-1.427-1.164-2.431-.2-.999-.262-2.235-.262-3.743s.062-2.744.262-3.743c.2-1.004.55-1.818 1.164-2.431.613-.614 1.427-.963 2.431-1.164ZM9 10c0-2.441 0-3.18-.34-3.403C8.515 6.5 8.304 6.5 8 6.5c-1 0-1 0-1 3.5 0 2.441 0 3.18.34 3.403.146.097.357.097.66.097.303 0 .514 0 .66-.097C9 13.18 9 12.441 9 10Zm3.66-3.403C13 6.82 13 7.559 13 10s0 3.18-.34 3.403c-.146.097-.357.097-.66.097-.303 0-.514 0-.66-.097C11 13.18 11 12.441 11 10c0-3.5 0-3.5 1-3.5.303 0 .514 0 .66.097Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgInactiveIcon
