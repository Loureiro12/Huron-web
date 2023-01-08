import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background: ${(props) => props.theme['blue-100']};
  border-radius: 8px;
  outline: 0;
  cursor: pointer;
  height: 53px;
  border: 0;
  padding: 0px 42px;
  transition: 0.4s;

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;

    color: #ffffff;
  }

  :hover {
    background: ${(props) => props.theme['blue-200']};
  }
`
