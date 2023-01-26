import styled from 'styled-components'
import { Input } from '../../components/Input'

export const Container = styled.div`
  justify-content: center;
  text-align: center;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['blue-100']};

  @media (min-width: 700px) {
    height: 100vh;
  }
`
export const Content = styled.div`
  justify-content: center;
  background-color: white;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
`

export const Header = styled.header`
  text-align: center;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  color: ${(props) => props.theme['blue-100']};
  margin-top: 10px;
  margin-bottom: 10px;
`

export const Caption = styled.h2`
  font-size: 0.875rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  color: ${(props) => props.theme['gray-900']};
  margin-top: 5px;
  margin-bottom: 20px;
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme['gray-300']};
  margin-top: 10px;
  margin-bottom: 10px;
`

export const CreateAccount = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  font-size: 0.75rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  color: ${(props) => props.theme['blue-100']};
  :hover {
    color: ${(props) => props.theme['blue-200']};
  }
`

export const InputEmail = styled(Input)`
  margin-bottom: 15px;
`
export const InputPassword = styled(Input)`
  margin-bottom: 30px;
`
export const ContainerNameUser = styled.div`
  justify-content: space-between;
  margin-bottom: 15px;

  @media (min-width: 700px) {
    display: flex;
  }
`

export const Separator = styled.div`
  margin: 15px 0;
  @media (min-width: 700px) {
    margin: 0 5px;
  }
`
export const Terms = styled.div`
  display: flex;
  justify-content: center;

  a {
    color: ${(porps) => porps.theme['gray-50']};
    text-decoration: none;
    font-size: 0.75rem;
    font-family: 'Inter', sans-serif;
  }

  p {
    color: ${(porps) => porps.theme['gray-50']};
    text-decoration: none;
    font-size: 0.75rem;
    margin: 0 10px;
  }

  a:hover {
    color: ${(props) => props.theme['gray-300']};
  }
`
export const BackButton = styled.button`
  position: fixed;
  z-index: 997;
  left: 90px;
  top: 60px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.theme['gray-50']};
  font-family: 'Inter', sans-serif;
  border-radius: 0px 0px 8px 8px;
  border: 0;
  outline: 0;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  @media (max-width: 780px) {
    top: 20px;
    left: 10px;
  }
`
