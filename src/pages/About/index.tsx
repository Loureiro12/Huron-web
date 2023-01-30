import { HeaderUnauthenticated } from '../../components/HeaderUnauthenticated'

import { Container, Content, Information, Title, Caption, Text } from './styles'

export function About() {
  return (
    <Container>
      <Content>
        <div>
          <HeaderUnauthenticated />
          <Information>
            <div>
              <Title>Descubra tudo sobre a Huron!</Title>
              <Caption>Visão:</Caption>
              <Text>
                Ser reconhecida como a melhor e mais inovadora empresa de gestão
                em saúde do mercado.
              </Text>

              <Caption>Sobre/Quem somos nós:</Caption>
              <Text>
                A Huron é uma empresa que foi criada para facilitar a gestão na
                área da saúde corporativa, promovendo uma gestão de saúde
                eficiente, com foco em facilidade, controle e economia. Nosso
                maior compromisso é ajudar empresas a ter o controle da sua
                operação, tendo tudo o que precisam na palma da mão e ainda
                reduzindo seus custos.
              </Text>

              <Text>
                Nossa plataforma oferece uma experiência única e inovadora, com
                fácil usabilidade e uma vasta opção de funcionalidades, estamos
                revolucionando o mercado de saúde e garantindo tecnologia de
                ponta para nossos clientes.
              </Text>

              <Text>
                Nós estamos conectando médicos e pacientes de forma segura e
                melhorando a interação entre as partes, usando nossa tecnologia
                para criar uma experiência inesquecível fazendo com que as
                pessoas se sintam informadas e com mais tempo de qualidade para
                tomar as melhores decisões nos momentos importantes.
              </Text>

              <Text>
                Com a Huron, a sua empresa conta com uma integração completa dos
                dados em saúde, ganhando diferencial competitivo, reduzindo o
                trabalho operacional e transformando a gestão de saúde com
                máxima segurança.
              </Text>
            </div>
          </Information>
        </div>
      </Content>
    </Container>
  )
}
