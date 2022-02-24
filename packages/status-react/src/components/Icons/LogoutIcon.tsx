import React from 'react'

import styled from 'styled-components'

export const LogoutIcon = () => {
  return (
    <Icon
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.5371 6C16.1605 6 18.2871 8.12665 18.2871 10.75V12.75C18.2871 13.1642 17.9513 13.5 17.5371 13.5C17.1229 13.5 16.7871 13.1642 16.7871 12.75V10.75C16.7871 8.95507 15.332 7.5 13.5371 7.5L12.5372 7.5H11.7499L10.75 7.5C8.95507 7.5 7.5 8.95507 7.5 10.75V11.4999V12.75V18.75V19.4999V20.75C7.5 22.5449 8.95507 24 10.75 24H11.7499H12.5372H13.5371C15.332 24 16.7871 22.5449 16.7871 20.75V18.75C16.7871 18.3358 17.1229 18 17.5371 18C17.9513 18 18.2871 18.3358 18.2871 18.75V20.75C18.2871 23.3734 16.1605 25.5 13.5371 25.5H12.5372H11.7499H10.75C8.12665 25.5 6 23.3734 6 20.75V19.4999V18.75V12.75V11.4999V10.75C6 8.12665 8.12665 6 10.75 6H11.7499H12.5372H13.5371Z" />
      <path d="M21.9822 16.75C22.4277 16.75 22.6508 17.2886 22.3358 17.6036L20.4697 19.4697C20.1768 19.7626 20.1768 20.2374 20.4697 20.5303C20.7626 20.8232 21.2374 20.8232 21.5303 20.5303L25.5303 16.5303C25.8232 16.2374 25.8232 15.7626 25.5303 15.4697L21.5303 11.4697C21.2374 11.1768 20.7626 11.1768 20.4697 11.4697C20.1768 11.7626 20.1768 12.2374 20.4697 12.5303L22.3358 14.3964C22.6508 14.7114 22.4277 15.25 21.9822 15.25L12 15.25C11.5858 15.25 11.25 15.5858 11.25 16C11.25 16.4142 11.5858 16.75 12 16.75L21.9822 16.75Z" />
    </Icon>
  )
}

const Icon = styled.svg`
  fill: ${({ theme }) => theme.tertiary};
`
