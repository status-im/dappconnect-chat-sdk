import React from 'react'

import styled from 'styled-components'

type DeleteIconProps = {
  width: number
  height: number
  className?: string
}

export const DeleteIcon = ({ width, height, className }: DeleteIconProps) => {
  return (
    <Icon
      width={width}
      height={height}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.26191 1.5C5.47293 1.5 4.83333 2.13959 4.83333 2.92857C4.83333 3.33621 4.50288 3.66667 4.09524 3.66667H2C1.72386 3.66667 1.5 3.89052 1.5 4.16667C1.5 4.44281 1.72386 4.66667 2 4.66667H2.49251C2.66109 4.66667 2.80314 4.79253 2.82342 4.95989L3.71566 12.3209C3.87795 13.6597 5.0143 14.6667 6.36295 14.6667H9.63705C10.9857 14.6667 12.1221 13.6597 12.2843 12.3209L13.1766 4.95989C13.1969 4.79253 13.3389 4.66667 13.5075 4.66667H14C14.2761 4.66667 14.5 4.44281 14.5 4.16667C14.5 3.89052 14.2761 3.66667 14 3.66667H11.9048C11.4971 3.66667 11.1667 3.33621 11.1667 2.92857C11.1667 2.13959 10.5271 1.5 9.7381 1.5L6.26191 1.5ZM9.80586 3.66667C10.0501 3.66667 10.2156 3.40724 10.1826 3.16524C10.1721 3.08786 10.1667 3.00885 10.1667 2.92857C10.1667 2.69188 9.97479 2.5 9.7381 2.5L6.2619 2.5C6.02521 2.5 5.83333 2.69188 5.83333 2.92857C5.83333 3.00885 5.82789 3.08786 5.81736 3.16524C5.78441 3.40725 5.9499 3.66667 6.19414 3.66667L9.80586 3.66667ZM11.9048 4.66667C12.0643 4.66667 12.1879 4.80617 12.1687 4.96453L11.2916 12.2006C11.1902 13.0373 10.48 13.6667 9.63705 13.6667H6.36295C5.52004 13.6667 4.80983 13.0373 4.7084 12.2006L3.8313 4.96453C3.81211 4.80616 3.93572 4.66667 4.09524 4.66667L11.9048 4.66667Z"
      />
    </Icon>
  )
}

const Icon = styled.svg`
  fill: ${({ theme }) => theme.tertiary};

  &.red {
    fill: ${({ theme }) => theme.redColor};
  }

  &.grey {
    fill: ${({ theme }) => theme.secondary};
  }
`
