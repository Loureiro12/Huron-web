import styled from 'styled-components'

export const Container = styled.div`
  justify-content: center;
  display: flex;
  background-color: ${(props) => props.theme['blue-150']};

  @media (min-width: 600px) {
    height: 100vh;
  }
`

export const Content = styled.div`
  flex-direction: column;
  width: 100%;
  max-width: 64rem;
  padding: 0 1rem;
`

export const Information = styled.div`
  align-items: center;
  display: flex;
  background-color: #fff;
  padding: 12px;
  border-radius: 8px;

  @media (max-width: 600px) {
    margin-bottom: 40px;
  }
`

export const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-style: normal;
  color: ${(props) => props.theme['gray-900']};
  font-size: 1.75rem;
  margin-bottom: 30px;
`

export const Caption = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-style: normal;
  color: ${(props) => props.theme['gray-900']};
  font-size: 1.125rem;
  margin-bottom: 15px;
`

export const Text = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 27px;
  color: ${(props) => props.theme['gray-900']};
  font-size: 1.125rem;
  margin-bottom: 15px;
`
