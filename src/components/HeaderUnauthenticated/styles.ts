import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  align-items: center;
`

export const Brand = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  font-size: 1.5rem;
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
    text-decoration: none;
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
