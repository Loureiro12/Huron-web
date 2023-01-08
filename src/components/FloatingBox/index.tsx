import React from 'react'

import { FloatingBoxContainer } from './styles'

interface FloatingBoxProps {
  children: React.ReactNode
}

export function FloatingBox({ children }: FloatingBoxProps) {
  return <FloatingBoxContainer>{children}</FloatingBoxContainer>
}
