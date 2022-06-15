import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import CardWidget from "../CardWidget/CardWidget";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <Container fluid>
        <Navbar bg="light" expand="lg" className='header'>
          <Navbar.Brand>
            <Link className='link' to={"/"}>
              TecnoLujan
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='navbarList'>
            <Nav className="me-auto">
              <Nav.Link><Link className='link' to={"/"}>Nosotros</Link></Nav.Link>
              <Nav.Link><Link className='link' to={"/products"}>Productos</Link></Nav.Link>
              <NavDropdown className="link" title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item> <Link className="link" to={"/Category/Celulares"}>Celulares</Link> </NavDropdown.Item>
                <NavDropdown.Item> <Link className="link" to={"/Category/Televisores"}>Televisores</Link> </NavDropdown.Item>
                <NavDropdown.Item> <Link className="link" to={"/Category/Notebook"}>Notebook</Link> </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Link to={"/cart"}> <CardWidget /> </Link>
        </Navbar>
      </Container>
    </header>
  );
}
