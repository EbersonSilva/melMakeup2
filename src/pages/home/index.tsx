// Pagina principal do projeto.
// import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview, Section } from './styles'
import Image from 'next/image'

import previewImage from '../../assets/home.png'
import { Carousel } from '@/components/carousel'
import { Testimonials } from '@/components/testimonials'

export default function Home() {
  return (
    <Container>
      <Section>
        <Hero>
          <h1>Realce sua beleza</h1>
          <text>
            Realce sua beleza única com a arte da maquiagem. Descubra a magia
            dos pincéis e cores em cada traço, transformando cada detalhe em uma
            expressão autêntica da sua personalidade. Deixe-me ser sua aliada na
            busca pela confiança e empoderamento através da beleza.
          </text>
        </Hero>
        <Preview>
          <Image
            src={previewImage}
            height={400} // Altura da imagem
            quality={100} // Qualidade da imagem
            priority // prioridade de carregamento
            alt="Imagem"
          />
        </Preview>
      </Section>
      <Section>
        <Preview>
          <Image
            src={previewImage}
            height={400} // Altura da imagem
            quality={100} // Qualidade da imagem
            priority // prioridade de carregamento
            alt="Imagem"
          />
        </Preview>
        <Hero>
          <h1>Sobre</h1>
          <text>
            <p>
              Desde 2019 atuo como maquiadora profissional na área da beleza.
            </p>
            <p>
              Formada como maquiadora profissional pela embellezze,
              especializada em colorimetria pela Nathália Teodoro, com
              aperfeiçoamento pela kimberly Santos, especializações com
              maquiadores renomados como Letícia de Paula, Bianca sobral, para
              estar adepta a atender todas as clientes em todas tonalidades de
              pele e característica Faço atendimento personalizado para dias
              importantes e de acordo com a necessidade de cada cliente.
            </p>
            <p>
              Exaltando a beleza única de cada mulher. Tornando-as ainda mais
              bonitas através da minha arte.
            </p>
          </text>
        </Hero>
      </Section>
      <Carousel />
      <Testimonials />
    </Container>
  )
}
