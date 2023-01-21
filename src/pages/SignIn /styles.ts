import styled from 'styled-components'
import { Input } from '../../components/Input'

export const Container = styled.div`
  height: 100vh;
  justify-content: center;
  text-align: center;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['blue-100']};
`
export const Content = styled.div`
  justify-content: center;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Header = styled.header`
  text-align: center;
`

export const Logo = styled.img`
  width: 70px;
  height: 70px;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme['blue-100']};
  margin-top: 10px;
  margin-bottom: 10px;
`

export const Caption = styled.h2`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => props.theme['gray-900']};
  margin-top: 5px;
  margin-bottom: 20px;
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dfdfdf;
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
  color: ${(props) => props.theme['blue-100']};
  :hover {
    color: ${(props) => props.theme['blue-200']};
  }
`

export const InputEmail = styled(Input)`
  margin-bottom: 15px;
`
export const InputPassword = styled(Input)`
  margin-bottom: 5px;
`
export const RecoverPassword = styled.div`
  text-align: end;
  margin-bottom: 30px;
  margin-top: 5px;

  a {
    color: ${(props) => props.theme['gray-900']};
    font-size: 0.75rem;
    font-weight: 400;
    text-decoration: none;
  }
  a:hover {
    color: ${(props) => props.theme['gray-700']};
  }
`
export const Terms = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  a {
    color: ${(props) => props.theme.white};
    text-decoration: none;
    font-size: 0.75rem;
  }
  p {
    color: ${(props) => props.theme.white};
    text-decoration: none;
    font-size: 0.75rem;
    margin: 0 0.625rem;
  }
  a:hover {
    color: #dfdfdf;
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
  border-radius: 0px 0px 8px 8px;
  border: 0;
  outline: 0;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.5;

  @media (max-width: 780px) {
    top: 20px;
    left: 10px;
  }

  :hover {
    color: ${(props) => props.theme['gray-300']};
  }
`
