import styled from 'styled-components'

export interface BoxStylesType {
  mg?: string
}

export const BoxContainer = styled.header<BoxStylesType>`
  padding: 21px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: ${(props) => props.theme['blue-50']};
  display: flex;
  margin: ${({ mg }) => mg || '0px'};
`
