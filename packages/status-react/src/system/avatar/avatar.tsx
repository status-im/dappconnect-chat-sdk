import React from 'react'

import { Image } from '../image'
import { Base, Indicator } from './styles'

import type { Variants } from './styles'

interface Props {
  size: Variants['size']
  indicator?: 'online' | 'offline'
  src?: string
}

const Avatar = (props: Props) => {
  const { size, src, indicator } = props

  // const identicon = useMemo(() => {
  //   const colors = colorWheel
  //     .map((color, idx) => {
  //       const prevDeg = idx === 0 ? '0deg' : `${colorWheel[idx - 1][1]}deg`
  //       return `${color[0]} ${prevDeg} ${color[1]}deg`
  //     })
  //     .join(',')
  //   return `conic-gradient(${colors})`
  // }, [colorWheel])

  // const intials = useMemo(() => {
  //   if (contact && contact?.customName) {
  //     return contact.customName.slice(0, 2)
  //   }
  //   if (contact && contact.trueName) {
  //     return contact.trueName.slice(0, 2)
  //   }
  // }, [contact])

  return (
    <Base size={size}>
      {src && (
        <Image
          src={src}
          alt="avatar"
          width="100%"
          height="100%"
          fit="cover"
          radius="full"
        />
      )}
      {indicator && <Indicator size={size} state={indicator} />}
    </Base>
  )
}

export { Avatar }
export type { Props as AvatarProps }
