import type { SVGProps } from 'react'

const SvgColourPickIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.621 3.1a6.11 6.11 0 0 1 2.088 1.204c.298.263.37.749.093 1.228l-.619 1.073c-.428-.308-.96-.641-1.608-1.015a19.616 19.616 0 0 0-1.683-.885l.62-1.073c.276-.48.733-.66 1.11-.533Zm-2.88 1.2.731-1.268c.48-.833 1.473-1.427 2.533-1.07a7.313 7.313 0 0 1 2.497 1.442c.839.739.82 1.895.34 2.728l-.732 1.267c.13.143.24.288.33.437.234.391.312.793.25 1.21-.058.387-.233.753-.431 1.096-.198.343-.427.677-.734.921-.33.262-.716.396-1.173.388a2.763 2.763 0 0 1-.543-.067l-2.35 4.07c-.621 1.077-1.797 1.579-2.696 1.82a8.119 8.119 0 0 1-1.683.26H6.036l-.011-.6-.525.292v-.002l-.002-.002-.004-.008-.015-.027a7.419 7.419 0 0 1-.209-.436 8.117 8.117 0 0 1-.407-1.152c-.241-.899-.395-2.168.227-3.245l2.35-4.07a2.766 2.766 0 0 1-.33-.437 1.774 1.774 0 0 1-.25-1.209c.058-.388.233-.753.431-1.096.198-.343.427-.678.734-.922.33-.262.716-.395 1.172-.388.174.003.355.026.543.067ZM8.366 9.078 6.13 12.954c-.378.654-.325 1.526-.108 2.335.104.39.238.733.347.979l.018.04.044-.004c.267-.03.631-.085 1.021-.19.809-.216 1.59-.606 1.968-1.26l2.238-3.875a19.635 19.635 0 0 1-1.683-.886A19.625 19.625 0 0 1 8.367 9.08Zm-2.342 7.856.01.6-.36.006-.175-.315.525-.291ZM8.33 6.142c.178-.307.315-.482.442-.583a.578.578 0 0 1 .406-.127c.212.004.524.073.996.269.467.194 1.052.496 1.801.928.749.433 1.303.788 1.705 1.096.405.31.621.546.73.728.097.16.113.283.093.415-.024.16-.107.367-.284.674-.177.306-.314.482-.441.582a.578.578 0 0 1-.406.127c-.212-.003-.524-.072-.996-.269-.467-.194-1.052-.496-1.801-.928-.749-.432-1.303-.788-1.705-1.096-.405-.31-.621-.546-.73-.728a.578.578 0 0 1-.093-.415c.024-.16.106-.367.283-.673Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgColourPickIcon
