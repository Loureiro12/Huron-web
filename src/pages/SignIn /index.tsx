import { useCallback } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'

import {
  Container,
  Content,
  Header,
  Title,
  Caption,
  CreateAccount,
  Line,
  InputEmail,
  InputPassword,
  RecoverPassword,
  Terms,
} from './styles'

export function SignIn() {
  const navigate = useNavigate()
  const handleOnClickSignUp = useCallback(
    () => navigate('/signup', { replace: true }),
    [navigate],
  )
  return (
    <>
      <Container>
        <div style={{ margin: 10, width: 400 }}>
          <Content>
            <Header>
              <Title>Olá, Bem-vindo</Title>
              <Caption>Insira suas credenciais para continuar</Caption>
              <InputEmail
                label="E-mail"
                type="email"
                style={{ mg: '0px 0px 10px 0px' }}
              />
              <InputPassword label="Senha" type="password" />
              <RecoverPassword>
                <NavLink to="/recover-password">Esqueci minha senha</NavLink>
              </RecoverPassword>
              <Button
                text="Entrar"
                type="button"
                onClick={() => navigate('/list-clinics')}
              />
              <Line />
              <CreateAccount onClick={handleOnClickSignUp}>
                Não tem uma conta? Criar aqui
              </CreateAccount>
            </Header>
          </Content>
          <Terms>
            <a href="/">Suporte</a>
            <p>-</p>
            <a href="/">Termos de Uso</a>
            <p>-</p>
            <a href="/">Política de Privacidade</a>
          </Terms>
        </div>
      </Container>
    </>
  )
}
