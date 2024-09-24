import type { SVGProps } from 'react'

const SvgExpandIcon = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#000"
      fillRule="evenodd"
      d="M8 1.944c-.762.04-1.435.11-2.028.225-1.074.208-1.937.573-2.584 1.22-.647.646-1.011 1.51-1.22 2.583A14.84 14.84 0 0 0 1.945 8h1.202c.038-.694.102-1.288.2-1.8.183-.942.475-1.547.89-1.963.416-.416 1.022-.708 1.964-.89.512-.1 1.106-.163 1.8-.201V1.944Zm4 1.202V1.944c.761.04 1.435.11 2.028.225 1.074.208 1.937.573 2.584 1.22.646.646 1.011 1.51 1.22 2.583.114.593.184 1.267.224 2.028h-1.202a13.426 13.426 0 0 0-.201-1.8c-.182-.942-.474-1.547-.89-1.963-.416-.416-1.021-.708-1.963-.89-.512-.1-1.107-.163-1.8-.201Zm0 13.708a13.44 13.44 0 0 0 1.8-.2c.942-.183 1.547-.475 1.963-.89.416-.417.708-1.022.89-1.964.1-.512.163-1.106.201-1.8h1.202c-.04.761-.11 1.435-.225 2.028-.208 1.074-.573 1.937-1.22 2.584-.646.646-1.51 1.011-2.583 1.22-.593.114-1.267.184-2.028.224v-1.202ZM3.146 12c.038.694.102 1.288.2 1.8.183.942.475 1.547.89 1.963.416.416 1.022.708 1.964.89.512.1 1.106.163 1.8.201v1.202c-.762-.04-1.435-.11-2.028-.225-1.074-.208-1.937-.573-2.584-1.22-.647-.646-1.011-1.51-1.22-2.583A14.842 14.842 0 0 1 1.945 12h1.202Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgExpandIcon
