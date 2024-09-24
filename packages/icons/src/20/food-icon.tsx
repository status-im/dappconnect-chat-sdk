import type { SVGProps } from 'react'

const SvgFoodIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.1 7A3.9 3.9 0 0 1 9.9 3.101 3.6 3.6 0 0 0 13.9 6.578V8c0 .707 0 1.207-.027 1.6-.027.388-.077.628-.156.818a2.4 2.4 0 0 1-1.299 1.3c-.19.078-.43.128-.817.155-.394.027-.894.027-1.601.027H7.5a1.4 1.4 0 0 1-1.4-1.4V7ZM10 1.9A5.1 5.1 0 0 0 4.9 7v3.5a2.6 2.6 0 0 0 2.6 2.6h.4V16a2.1 2.1 0 1 0 4.2 0v-2.972c.278-.039.534-.101.777-.202a3.6 3.6 0 0 0 1.949-1.948c.15-.361.213-.747.244-1.196.03-.439.03-.98.03-1.66V6a.726.726 0 0 0-.93-.695A2.4 2.4 0 0 1 11.1 3c0-.529-.405-1.1-1.061-1.1H10Zm.9 11.197c-.264.003-.556.003-.878.003H9.1V16a.9.9 0 1 0 1.8 0v-2.903Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgFoodIcon
