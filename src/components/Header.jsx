import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Container>
        <Link href="/">
          <Navbar.Brand className="cursor-pointer">CRWN</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/checkout">
              <Nav.Link as="a" className="cursor-pointer">
                CART
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
