import NextLink from 'next/link'

import type { ComponentProps } from 'react'

export const Link = (props: ComponentProps<typeof NextLink>) => {
  const external =
    typeof props.href === 'string'
      ? props.href.startsWith('http')
      : Boolean(props.href.pathname?.startsWith('http'))

  return (
    <NextLink
      {...props}
      {...(external && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
    />
  )
}
