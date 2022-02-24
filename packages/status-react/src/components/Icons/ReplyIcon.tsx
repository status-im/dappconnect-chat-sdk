import React from 'react'

import styled from 'styled-components'

type ReplyProps = {
  width: number
  height: number
  className?: string
}

export function ReplySvg({ width, height, className }: ReplyProps) {
  return (
    <Icon
      width={width}
      height={height}
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M14.2368 11.4305C13.9683 11.162 13.533 11.162 13.2645 11.4305C12.996 11.699 12.996 12.1343 13.2645 12.4028L14.9751 14.1134C15.2639 14.4021 15.0594 14.8958 14.651 14.8958L11.0006 14.8958C7.83652 14.8958 5.27148 12.3308 5.27148 9.16667C5.27148 6.00254 7.83652 3.4375 11.0007 3.4375C11.3803 3.4375 11.6882 3.1297 11.6882 2.75C11.6882 2.3703 11.3803 2.0625 11.0007 2.0625C7.07713 2.0625 3.89648 5.24315 3.89648 9.16667C3.89648 13.0902 7.07713 16.2708 11.0006 16.2708H14.651C15.0594 16.2708 15.2639 16.7645 14.9751 17.0533L13.2645 18.7639C12.996 19.0324 12.996 19.4677 13.2645 19.7361C13.533 20.0046 13.9683 20.0046 14.2368 19.7361L17.9035 16.0695C18.1719 15.801 18.1719 15.3657 17.9035 15.0972L14.2368 11.4305Z" />
    </Icon>
  )
}

const Icon = styled.svg`
  fill: ${({ theme }) => theme.secondary};

  &.input {
    fill: ${({ theme }) => theme.primary};
  }

  &.menu {
    fill: ${({ theme }) => theme.tertiary};
  }
`
