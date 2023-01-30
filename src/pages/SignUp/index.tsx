import { useCallback } from 'react'

import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

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
  ContainerNameUser,
  Separator,
  Terms,
} from './styles'

export function SignUp() {
  const navigate = useNavigate()

  const handleOnClickSignIn = useCallback(
    () => navigate('/login', { replace: true }),
    [navigate],
  )

  return (
    <>
      <Container>
        <div style={{ margin: 50, width: 400 }}>
          <Content>
            <Header>
              <Title>Inscreva-se</Title>
              <Caption>Insira suas credenciais para continuar</Caption>
              <ContainerNameUser>
                <Input
                  label="Primeiro nome"
                  placeholder="Primeiro nome"
                  type="text"
                />
                <Separator />
                <Input label="Sobrenome" placeholder="Sobrenome" type="text" />
              </ContainerNameUser>
              <InputEmail
                label="CPF"
                placeholder="Digite seu CPF"
                type="text"
              />
              <InputEmail
                label="E-mail"
                placeholder="E-mail"
                type="email"
                style={{ mg: '15px 0px 15px 0px' }}
              />
              <InputPassword
                label="Senha"
                placeholder="Senha"
                type="password"
                style={{ mg: '0px 0px 30px 0px' }}
              />
              <Button
                text="Cadastrar"
                type="button"
                onClick={() => navigate('/create-clinic')}
              />
              <Line />
              <CreateAccount onClick={handleOnClickSignIn}>
                Já tem uma conta? Acesse aqui
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
