import type { SVGProps } from 'react'

const SvgUnpinIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.657 5.955c.497-.86.898-1.491 1.25-1.942.355-.454.626-.677.846-.78.377-.176.822-.097 1.933.545 1.11.641 1.402.986 1.438 1.4.021.243-.037.59-.253 1.124a12.72 12.72 0 0 1-.61 1.258 4.53 4.53 0 0 1 1.362-.017c.141-.284.262-.547.36-.792.246-.607.381-1.16.336-1.677-.096-1.105-.98-1.727-2.033-2.335-1.054-.609-2.034-1.063-3.04-.594-.47.22-.881.614-1.284 1.129-.388.495-.801 1.147-1.275 1.962L2.115 7.671l-.79.537.827.478 3.744 2.161-1.885 3.114h1.5l1.437-2.506.558.322c.02-.435.104-.854.24-1.247L3.58 8.124l2.895-1.973.114-.077.068-.119Zm2.798 4.348.848-.849L12 11.151l1.697-1.697.849.849L12.849 12l1.697 1.697-.849.849L12 12.849l-1.697 1.697-.848-.849L11.152 12l-1.697-1.697Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgUnpinIcon
