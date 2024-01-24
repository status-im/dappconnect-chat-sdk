import { createIcon } from '../lib/create-icon'

const SvgShopIcon = createIcon(props => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 20 20"
      focusable={false}
      aria-hidden={true}
    >
      <path
        fill={props.color}
        fillRule="evenodd"
        d="M10 2.4c-.798 0-1.733.129-2.462.777-.69.613-1.081 1.586-1.133 2.998-.577.15-1.067.388-1.454.776-.501.5-.752 1.173-.887 1.982C3.93 9.737 3.9 10.75 3.9 12v2.325c0 .539 0 .98.03 1.338.03.37.094.705.253 1.017a2.6 2.6 0 0 0 1.137 1.137c.312.159.647.224 1.017.254.358.029.799.029 1.338.029h4.65c.539 0 .98 0 1.337-.03.371-.03.706-.094 1.018-.253a2.6 2.6 0 0 0 1.136-1.137c.16-.312.224-.647.255-1.018.029-.358.029-.798.029-1.337V12c0-1.249-.03-2.263-.165-3.067-.134-.809-.385-1.482-.886-1.982-.387-.388-.878-.626-1.455-.776-.051-1.412-.444-2.386-1.133-2.998C11.73 2.529 10.797 2.4 10 2.4Zm2.382 3.578c-.076-1.061-.385-1.608-.718-1.905-.396-.351-.962-.473-1.664-.473-.703 0-1.268.122-1.664.473-.333.297-.643.844-.719 1.905C8.291 5.916 9.082 5.9 10 5.9c.917 0 1.708.016 2.382.078ZM5.248 9.13C5.132 9.825 5.1 10.749 5.1 12v2.3c0 .57 0 .961.025 1.265.024.296.069.455.127.57a1.4 1.4 0 0 0 .612.612c.116.06.275.104.571.128.304.024.695.025 1.265.025h4.6c.57 0 .961 0 1.265-.025.296-.024.455-.069.57-.128a1.4 1.4 0 0 0 .612-.611c.059-.116.103-.275.128-.571.024-.304.025-.695.025-1.265V12c0-1.251-.032-2.175-.148-2.87-.115-.691-.302-1.081-.551-1.33-.25-.25-.64-.437-1.33-.552C12.173 7.132 11.25 7.1 10 7.1s-2.175.032-2.87.148c-.692.115-1.082.302-1.33.551-.25.25-.437.64-.552 1.33Zm6.651.87h1.2v.048a3.67 3.67 0 0 1-.046.441 3.672 3.672 0 0 1-.33 1.03 2.794 2.794 0 0 1-.945 1.09c-.46.307-1.048.491-1.778.491s-1.317-.184-1.778-.491a2.794 2.794 0 0 1-.946-1.09 3.673 3.673 0 0 1-.376-1.502v-.016L7.5 10h.6v-.002.01l.003.056a2.475 2.475 0 0 0 .246.917c.12.242.292.465.539.63.242.16.592.289 1.112.289.52 0 .87-.128 1.112-.29a1.59 1.59 0 0 0 .538-.628 2.474 2.474 0 0 0 .25-.974v-.01V10Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgShopIcon
