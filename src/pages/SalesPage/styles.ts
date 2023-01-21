import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  justify-content: center;
  display: flex;
  background-color: ${(props) => props.theme['blue-150']};
`

export const Content = styled.div`
  flex-direction: column;
  width: 100%;
  max-width: 64rem;
  padding: 0 1rem;
`

export const Brand = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  font-size: 1.5rem;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  align-items: center;
`

export const ContentOptions = styled.div`
  a {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color: ${(props) => props.theme.white};
    font-size: 0.875rem;
    margin-left: 1.313rem;
    cursor: pointer;
    transition: background-color 0.1s;
  }
  a:hover {
    color: ${(props) => props.theme['gray-100']};
  }
  @media (max-width: 600px) {
    display: none;
  }
`

export const ContentButton = styled.div`
  button {
    padding: 15px;
    border: 0;
    background-color: #1d1617;
    cursor: pointer;
    border-radius: 4px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color: ${(props) => props.theme.white};
    font-size: 0.875rem;
    margin-left: 1.313rem;
    transition: background-color 0.1s;
  }

  button:hover {
    background-color: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['gray-100']};
  }

  a {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme.white};
    font-size: 0.875rem;
    cursor: pointer;
    transition: background-color 0.1s;
    text-decoration: none;
  }
  a:hover {
    color: ${(props) => props.theme['gray-100']};
  }
`

export const Information = styled.div`
  align-items: center;
  display: flex;
  height: 80vh;
`

export const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-style: normal;
  color: ${(props) => props.theme.white};
  margin-bottom: 40px;
  font-size: 2.375rem;

  @media (min-width: 600px) {
    max-width: 400px;
    font-size: 3.625rem;
  }
`

export const LearnMoreButton = styled.button`
  border: 0;
  cursor: pointer;
  padding: 15px 36px;
  border-radius: 37px;
  background-color: ${(props) => props.theme['gray-900']};
  font-size: 0.875rem;
  font-family: 'Inter';
  font-weight: 700;
  color: ${(props) => props.theme['gray-50']};
  transition: 0.4s;

  :hover {
    background-color: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['gray-300']};
  }
`

export const InformationButton = styled.button`
  border: 0;
  cursor: pointer;
  padding: 15px 36px;
  border-radius: 37px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme['gray-50']};
  font-size: 0.875rem;
  font-family: 'Inter';
  font-weight: 700;
  color: ${(props) => props.theme['gray-50']};
  transition: 0.4s;

  :hover {
    background-color: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['gray-800']};
    border: 1px solid transparent;
  }

  @media (min-width: 400px) {
    margin-left: 20px;
  }

  @media (max-width: 600px) {
    margin-top: 10px;
  }
`
