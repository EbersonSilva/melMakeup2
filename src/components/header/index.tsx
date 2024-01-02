// import { HeaderContainer, HeaderLogo, HeaderNav } from './styles'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


export function Header() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">MelMakeup</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>







    // <HeaderContainer>
    //   <HeaderLogo>MelMakeup</HeaderLogo>
    //   <HeaderNav>
    //     <ul>
    //       <li>
    //         <a href="">Home</a>
    //       </li>
    //       <li>
    //         <a href="">Sobre</a>
    //       </li>
    //       <li>
    //         <a href="">Portifolio</a>
    //       </li>
    //       <li>
    //         <a href="">Contato</a>
    //       </li>
    //     </ul>
    //   </HeaderNav>
    // </HeaderContainer>
  )
}
