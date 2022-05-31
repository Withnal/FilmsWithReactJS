import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand href="/">NAL FILMS</Navbar.Brand>
        <Nav>
          <Nav.Link href="#thriller">Triller</Nav.Link>
          <Nav.Link href="#trending">Trending</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
