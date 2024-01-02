import {
  Dot,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from '@phosphor-icons/react'

import { ContainerFooter, NavLinks, SocialMedia } from './styles'
import Link from 'next/link'

export function Footer() {
  return (
    <ContainerFooter>
      <SocialMedia>
        <InstagramLogo size={24} color="#e1e1e6" />
        <FacebookLogo size={24} color="#e1e1e6" />
        <TwitterLogo size={24} color="#e1e1e6" />
      </SocialMedia>
      <NavLinks>
        <Link href="">Inicio</Link>
        <Dot />
        <Link href="">Sobre</Link>
        <Dot />
        <Link href="">Portfolio</Link>
      </NavLinks>
    </ContainerFooter>
  )
}
