// Pagina principal do projeto.
import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import Image from 'next/image'

import previewImage from '../../assets/home.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Realce sua beleza</Heading>
        <Text size="xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          perspiciatis obcaecati molestias quidem explicabo corporis nobis
          beatae unde! Quas quisquam modi, deserunt quis distinctio itaque
          tenetur fugiat dicta nobis deleniti?
        </Text>
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
    </Container>
  )
}
