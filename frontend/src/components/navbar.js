import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { List } from 'react-bootstrap-icons';
import StitchedRedLogo from '../images/StitchedRedLogo.png';
import CartIcon from '../images/CartIcon.png';
import ProfileIcon from '../images/ProfileIcon.png';
import WishlistIcon from '../images/WishlistIcon.png';
import FlagIcon from '../images/FlagIcon.png';

function Navigation() {
  return (
    <Navbar expand="lg" className="fixed-top navBackground" variant='light'>
      <Container>
        <Navbar.Brand>
          <Link className='link Logo' to='/Home'>
            <img src={StitchedRedLogo} alt='Stitched Logo' className='navbarLogo'/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <List color="white" size={30} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Login</Nav.Link>
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/ProductDetails">Product Details</Nav.Link>
            <Nav.Link as={Link} to="/ProductListing">Product Listings</Nav.Link>
            <Nav.Link as={Link} to="/Flag"><img src={FlagIcon} alt='Profile Icon' className='navIcons'/></Nav.Link>
            <Nav.Link as={Link} to="/Wishlist"><img src={WishlistIcon} alt='Cart Icon' className='navIcons'/></Nav.Link>
            <Nav.Link as={Link} to="/Cart"><img src={CartIcon} alt='Cart Icon' className='navIcons'/></Nav.Link>
            <Nav.Link as={Link} to="/Profile"><img src={ProfileIcon} alt='Profile Icon' className='navIcons'/></Nav.Link>
            <Nav.Link as={Link} to="/Admin">Admin</Nav.Link>
            <Nav.Link as={Link} to="/test">Test</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;