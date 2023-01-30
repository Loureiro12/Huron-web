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
