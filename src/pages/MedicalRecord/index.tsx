import { useNavigate } from 'react-router-dom'

import LogoutIcon from '@mui/icons-material/Logout'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import AddIcon from '@mui/icons-material/Add'

import { FloatingBox } from '../../components/FloatingBox'
import { Header } from '../../components/Header'
import { Box } from '../../components/Box'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

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
  ButtonAddDoctor,
  ContainerButtonAddDoctor,
} from './styles'

export function MedicalRecord() {
  const navigate = useNavigate()

  const handleClickNewDoctor = () => {
    console.log('Adiciona mais um campo de médico')
  }
  return (
    <>
      <Header />
      <Container>
        <Content>
          <ContentHeaderPage>
            <ButtonBack onClick={() => navigate('/create-clinic')}>
              <KeyboardArrowLeftIcon />
              <p>Voltar</p>
            </ButtonBack>
            <TextHeaderPage>Cadastrar médico na clínica</TextHeaderPage>
          </ContentHeaderPage>
          <Box style={{ mg: '1.375rem 0rem', bg: '#FFFFFF' }}>
            <TitleBox>Cadastre os médicos da sua clínica</TitleBox>
            <WrapperInput>
              <Input label="Nome" placeholder="Nome do médico" />
              <Input label="E-mail" placeholder="E-mail do médico" />
            </WrapperInput>
            <ContainerButtonAddDoctor>
              <ButtonAddDoctor
                type="button"
                onClick={() => handleClickNewDoctor()}
              >
                <AddIcon />
                <p>Cadastrar novo médico</p>
              </ButtonAddDoctor>
            </ContainerButtonAddDoctor>
            <Button
              text="Cadastrar"
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
