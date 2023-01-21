import { useCallback } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  Container,
  Header,
  Content,
  ContentOptions,
  ContentButton,
  Brand,
  Information,
  Title,
  LearnMoreButton,
  InformationButton,
} from './styles'

export function SalesPage() {
  const navigate = useNavigate()
  const handleOnClick = useCallback(
    () => navigate('/signin', { replace: true }),
    [navigate],
  )

  return (
    <Container>
      <Content>
        <div>
          <Header>
            <Brand>Huron</Brand>
            <ContentOptions>
              <a>Home</a>
              <a>Sobre</a>
              <a>Preço</a>
              <a>Contato</a>
            </ContentOptions>
            <ContentButton>
              <NavLink to="/signup">Cadastrar-se</NavLink>
              <button onClick={handleOnClick}>Entrar</button>
            </ContentButton>
          </Header>
          <Information>
            <div>
              <Title>Transforme a gestão da sua clínica</Title>
              <LearnMoreButton>Get Quote Now</LearnMoreButton>
              <InformationButton>Learn More</InformationButton>
            </div>
          </Information>
        </div>
      </Content>
    </Container>
  )
}
