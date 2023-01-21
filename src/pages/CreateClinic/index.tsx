import { FloatingBox } from '../../components/FloatingBox'
import { Header } from '../../components/Header'
import LogoutIcon from '@mui/icons-material/Logout'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

import {
  Container,
  Content,
  ContentHeaderPage,
  ButtonBack,
  TextHeaderPage,
  TextFloatingBox,
  ContainerFloatingBox,
  TitleBox,
  WrapperInput,
} from './styles'

import { Box } from '../../components/Box'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function CreateClinic() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <ContentHeaderPage>
            <ButtonBack>
              <KeyboardArrowLeftIcon />
              <p>Voltar</p>
            </ButtonBack>
            <TextHeaderPage>Criando nova Clínica</TextHeaderPage>
          </ContentHeaderPage>
          <Box style={{ mg: '1.375rem 0rem', bg: '#FFFFFF' }}>
            <TitleBox>Informação sobre a clínica</TitleBox>
            <Input
              label="Email"
              placeholder="Nome da Clínica"
              style={{ mg: '0px 0px 21px 0px' }}
            />
            <Input
              label="Descrição"
              placeholder="Adicione uma descrição para a clínica"
              style={{ mg: '0px 0px 21px 0px' }}
            />
            <WrapperInput>
              <Input label="Endereço" placeholder="Endereço da clínica" />
              <Input label="Complemento" placeholder="Complemento da clínica" />
            </WrapperInput>
            <WrapperInput>
              <Input label="Cep" placeholder="Cep da clínica" />
              <Input label="Telefone" placeholder="Telefone da clínica" />
            </WrapperInput>
            <Button
              text="Continuar"
              styleButton={{ mg: '32px 0px 0px 0px' }}
              type="button"
            />
          </Box>
        </Content>
      </Container>
      <FloatingBox>
        <ContainerFloatingBox>
          <LogoutIcon />
          <TextFloatingBox>Sair</TextFloatingBox>
        </ContainerFloatingBox>
      </FloatingBox>
    </>
  )
}
