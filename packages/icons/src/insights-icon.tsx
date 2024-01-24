import { createIcon } from '../lib/create-icon'

const SvgInsightsIcon = createIcon(props => {
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
        d="M13.143 2.4c1.064 0 2.024.637 2.436 1.618l3.086 7.327.006.014c.068.164.11.264.148.367.16.438.254.897.276 1.364.005.109.005.218.005.395v.015a4.1 4.1 0 0 1-7.956 1.396A3.18 3.18 0 0 1 10 15.1c-.463 0-.845-.09-1.144-.204A4.102 4.102 0 0 1 .9 13.5v-.015c0-.177 0-.286.005-.395a4.6 4.6 0 0 1 .276-1.364c.037-.103.08-.203.148-.367l.006-.014L4.42 4.018a2.644 2.644 0 0 1 5.077 1.151l-.037.776c.162-.029.342-.045.54-.045s.377.016.54.045l-.037-.776a2.644 2.644 0 0 1 2.64-2.77ZM9.096 13.688l.047.025c.177.089.46.187.857.187a1.899 1.899 0 0 0 .904-.212 4.169 4.169 0 0 1-.004-.173l-.3-6.304c-.104-.051-.29-.111-.6-.111s-.496.06-.6.11l-.3 6.305c0 .058-.002.116-.004.173Zm2.873-2.95-.19-4.003.007-.004V6.73l-.001-.002-.002-.003-.004-.008-.002-.003-.076-1.602a1.443 1.443 0 0 1 2.772-.629l2.225 5.284A4.085 4.085 0 0 0 15 9.4a4.09 4.09 0 0 0-3.03 1.339Zm-3.748-4.02.001-.003.077-1.602a1.444 1.444 0 0 0-2.773-.629L3.302 9.767A4.085 4.085 0 0 1 5 9.4c1.2 0 2.28.516 3.03 1.339l.191-4.004a.034.034 0 0 1-.007-.004V6.73l.001-.002.002-.003.004-.008ZM17.9 13.5a2.9 2.9 0 1 0-5.8 0 2.9 2.9 0 0 0 5.8 0ZM5 16.4a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgInsightsIcon
