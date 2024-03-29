import styled from 'styled-components'

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  padding: 0 20px;
`
export const Content = styled.div`
  width: 1120px;
  margin-top: 2.875rem;
`

export const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  display: flex;
  width: 100%;
  align-items: center;
`
export const TextPosition = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 19px;

  color: ${(props) => props.theme['gray-900']};
`
export const Text = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;

  color: ${(props) => props.theme['gray-900']};
`
export const ContentHeaderPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TextHeaderPage = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 19px;

  color: ${(props) => props.theme['gray-900']};
`

export const ContainerFloatingBox = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5625rem;

  :hover {
    p {
      color: ${(props) => props.theme['blue-200']};
    }

    svg {
      color: ${(props) => props.theme['blue-200']};
    }
  }

  svg {
    color: ${(props) => props.theme['blue-100']};
    font-weight: 700;
  }
`

export const TextFloatingBox = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: ${(props) => props.theme['blue-100']};
`
export const ButtonBox = styled.button`
  background: transparent;
  outline: 0;
  cursor: pointer;
  border: 0;
  transition: 0.4s;
  cursor: pointer;
  border-radius: 8px;
`
