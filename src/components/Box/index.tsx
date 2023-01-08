import React from 'react'
import { BoxContainer, BoxStylesType } from './styles'

interface BoxType {
  children: React.ReactNode
  style?: BoxStylesType
}

export function Box({ children, style }: BoxType) {
  return <BoxContainer mg={style?.mg}>{children}</BoxContainer>
}
