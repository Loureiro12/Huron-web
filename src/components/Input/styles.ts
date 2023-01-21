import styled from 'styled-components'

export interface InputStylesType {
  width?: string
  mg?: string
}

export const Container = styled.div<InputStylesType>`
  width: ${({ width }) => width || '100%'};
  margin: ${({ mg }) => mg};
`

export const InputContainer = styled.div`
  width: 100%;
  height: 45px;
`

export const InputContent = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  background-color: ${(props) => props.theme['gray-50']};
  border: 0;
  padding: 16px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 17px;

  color: ${(props) => props.theme['gray-900']};

  ::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 17px;

    color: ${(props) => props.theme['gray-450']};
  }
`

export const Label = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 17px;
  margin-bottom: 6px;
  text-align: start;

  color: ${(props) => props.theme['blue-150']};
`
