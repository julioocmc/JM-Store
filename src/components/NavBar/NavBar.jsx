import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/img/Logo1.png';
import CartWidget from '../Cart/CartWidget';
import '../Cart/Cart.css';

const NavBar = ({ cartCount }) => {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: '#d2b48c' }}>
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
          </Link>
          <Link
            className="cart-mobile"
            style={{ paddingRight: '1rem' }}
            to="/cart"
          >
            <CartWidget cartCount={cartCount} />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="align-items-center">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
              <NavLink className="nav-link" to="/categoria/plantas">
                Plantas
              </NavLink>
              <NavLink className="nav-link" to="/categoria/macetas">
                Macetas
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <Link className="cart-desktop" to="/cart">
            <CartWidget cartCount={cartCount} />
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
