import { Navbar, Container, Nav,} from 'react-bootstrap';
import CardWidget from "../CardWidget/CardWidget";

export default function Header() {
  return (
    <header className="header">
      <Container fluid>
      <Navbar bg="light" expand="lg" className='header'>
          <Navbar.Brand className='logo' href="#home">TecnoLujan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse id="basic-navbar-nav" className='Navbar'>
            <Nav className="me-auto">
              <Nav.Link className='link' href="#home">Nosotros</Nav.Link>
              <Nav.Link className='link' href="#Productos">Productos</Nav.Link>
              <Nav.Link className='link' href='#Contacto'>Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CardWidget />
      </Navbar>
      </Container>
    </header>
  );
}
