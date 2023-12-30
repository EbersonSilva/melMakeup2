import { FacebookLogo, InstagramLogo, TwitterLogo } from '@phosphor-icons/react'
import { ContainerFooter } from './styles'
import Link from 'next/link'

export function Footer() {
  return (
    <ContainerFooter>
      <div>
        <InstagramLogo size={32} color="#e1e1e6" />
        <FacebookLogo size={32} color="#e1e1e6" />
        <TwitterLogo size={32} color="#e1e1e6" />
      </div>
      <div>
        <Link href="">Teste</Link>
        <Link href="">Teste</Link>
        <Link href="">Teste</Link>
      </div>
    </ContainerFooter>
  )
}
