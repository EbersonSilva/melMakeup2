import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'

export function Header() {
  return (
    <Navbar
      className="justify-content-between"
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">MelMakeup</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center"
          id="basic-navbar-nav"
        >
          <Nav>
            <NavItem>
              <Nav.Link href="#home">Sobre</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="#link">Portfolio</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="#link">Contato</Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
