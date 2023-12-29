import { HeaderContainer, HeaderLogo, HeaderNav } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo>MelMakeup</HeaderLogo>
      <HeaderNav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
          <li>
            <a href="">Portifolio</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </HeaderNav>
    </HeaderContainer>
  )
}
