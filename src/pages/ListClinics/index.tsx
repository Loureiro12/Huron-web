import { Box } from '../../components/Box'
import { Button } from '../../components/Button'
import { FloatingBox } from '../../components/FloatingBox'
import { Header } from '../../components/Header'
import LogoutIcon from '@mui/icons-material/Logout'

import {
  Container,
  Content,
  ContentBox,
  TextPosition,
  Text,
  ContentHeaderPage,
  TextHeaderPage,
  TextFloatingBox,
  ContainerFloatingBox,
} from './styles'

export function ListClinics() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <ContentHeaderPage>
            <TextHeaderPage>Clinicas Cadastradas</TextHeaderPage>
            <Button text="Criar nova" />
          </ContentHeaderPage>
          <Box style={{ mg: '2.75rem 0rem 1.375rem 0rem' }}>
            <ContentBox>
              <TextPosition>01</TextPosition>
              <Text>Nome da clínica</Text>
              <Text>(31) 99415-2935</Text>
              <Text>30882-520</Text>
            </ContentBox>
          </Box>

          <Box style={{ mg: '1.375rem 0rem' }}>
            <ContentBox>
              <TextPosition>02</TextPosition>
              <Text>Nome da clínica</Text>
              <Text>(31) 99415-2935</Text>
              <Text>30882-520</Text>
            </ContentBox>
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
