import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { List } from 'react-bootstrap-icons';

function Navigation() {
  return (
    <Navbar expand="lg" className="navBackground" variant='light'>
      <Container>
        <Navbar.Brand><Link className='link Logo' to='#'>Stiched</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <List color="white" size={30} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Login</Nav.Link>
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/Cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/ProductDetails">Product Details</Nav.Link>
            <Nav.Link as={Link} to="/ProductListing">Product Listings</Nav.Link>
            <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/Admin">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;