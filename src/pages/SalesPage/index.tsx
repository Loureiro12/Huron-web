import { useNavigate } from 'react-router-dom'
import { HeaderUnauthenticated } from '../../components/HeaderUnauthenticated'
import {
  Container,
  Content,
  Information,
  Title,
  LearnMoreButton,
  InformationButton,
} from './styles'

export function SalesPage() {
  const navigate = useNavigate()

  return (
    <Container>
      <Content>
        <div>
          <HeaderUnauthenticated />
          <Information onClick={() => navigate('/')}>
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
