import { InputHTMLAttributes } from 'react'
import {
  InputContainer,
  InputContent,
  InputStylesType,
  Label,
  Container,
} from './styles'

interface InputProps extends InputHTMLAttributes<any> {
  label: string
  style?: InputStylesType
}

export function Input({ label, style, ...rest }: InputProps) {
  return (
    <Container width={style?.width} mg={style?.mg}>
      <Label>{label}</Label>

      <InputContainer>
        <InputContent {...rest} />
      </InputContainer>
    </Container>
  )
}
