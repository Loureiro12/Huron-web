import { NavLink, useNavigate } from 'react-router-dom'

import { Brand, ContentButton, ContentOptions, HeaderContainer } from './styles'

export function HeaderUnauthenticated() {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <Brand>Huron</Brand>
      <ContentOptions>
        <a href="/">Home</a>
        <a href="/about">Sobre</a>
        <a href="/">Preço</a>
        <a href="/">Contato</a>
      </ContentOptions>
      <ContentButton>
        <NavLink to="/signup">Cadastrar-se</NavLink>
        <button onClick={() => navigate('/login', { replace: true })}>
          Entrar
        </button>
      </ContentButton>
    </HeaderContainer>
  )
}
