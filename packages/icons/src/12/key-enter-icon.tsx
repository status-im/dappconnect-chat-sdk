import type { SVGProps } from 'react'

const SvgKeyEnterIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.9 3.05c.29 0 .473 0 .612.012a.53.53 0 0 1 .192.037.45.45 0 0 1 .197.197.53.53 0 0 1 .037.192c.012.14.012.323.012.612v1.8c0 .289 0 .473-.012.612a.53.53 0 0 1-.037.192.45.45 0 0 1-.197.197.53.53 0 0 1-.192.037c-.14.012-.323.012-.612.012H3.828l1.56-1.561-.777-.778-2.5 2.5-.389.389.39.389 2.5 2.5.777-.778L3.828 8.05H7.92c.263 0 .492 0 .682-.016.2-.016.404-.052.602-.153a1.55 1.55 0 0 0 .677-.677c.1-.198.137-.402.153-.602.016-.19.016-.419.016-.681V4.08c0-.263 0-.492-.016-.682a1.576 1.576 0 0 0-.153-.602 1.55 1.55 0 0 0-.677-.677 1.577 1.577 0 0 0-.602-.154c-.19-.015-.419-.015-.681-.015H7v1.1h.9Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgKeyEnterIcon
