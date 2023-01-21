import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer, ButtonStylesType } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  styleButton?: ButtonStylesType
}

export function Button({ text, styleButton, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest} mg={styleButton?.mg}>
      <p>{text}</p>
    </ButtonContainer>
  )
}
