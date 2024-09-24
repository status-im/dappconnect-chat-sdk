import type { SVGProps } from 'react'

const SvgKeyShiftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 1.065 5.08 6.985H8.55c-.002.369-.01.684-.032.944-.033.37-.105.746-.338 1.037-.253.317-.609.428-.947.475-.32.044-.727.044-1.194.044h-.076c-.467 0-.875 0-1.194-.044-.338-.047-.694-.158-.947-.475-.233-.291-.305-.668-.338-1.037-.023-.26-.03-.575-.032-.944H.92L6 1.065ZM3.08 6.95h1.47v.55c0 .636 0 1.075.03 1.397.029.334.082.426.1.447.002.003.008.011.034.023a.78.78 0 0 0 .205.05c.235.032.564.033 1.081.033s.846-.001 1.08-.034a.78.78 0 0 0 .206-.05c.026-.01.032-.018.034-.022.017-.021.071-.113.1-.447.03-.322.03-.761.03-1.397v-.55h1.47L6 2.935 3.08 6.95Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgKeyShiftIcon
