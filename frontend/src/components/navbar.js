import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import { List, Search, Shield } from "react-bootstrap-icons";
import StitchedRedLogo from "../images/StitchedRedLogo.png";
import CartIcon from "../images/CartIcon.png";
import ProfileIcon from "../images/ProfileIcon.png";
import WishlistIcon from "../images/WishlistIcon.png";

function Navigation() {
  const location = useLocation();
  if (location.pathname === "/") return null;

  return (
    <Navbar expand="lg" className="navBackground navbar">
      {/* Full navbar layout — 3 columns: left links | center logo | right icons */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "0 2rem",
        }}
      >
        {/* Left — text links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <Nav.Link
            as={Link}
            to="/Home"
            style={{ fontWeight: "600", padding: 0 }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/ProductListing"
            style={{ fontWeight: "600", padding: 0 }}
          >
            Shop
          </Nav.Link>
        </div>

        {/* Center — logo */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Link to="/Home">
            <img
              src={StitchedRedLogo}
              alt="Stitched Logo"
              className="navbarLogo"
            />
          </Link>
        </div>

        {/* Right — icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
          <Nav.Link as={Link} to="/Cart" style={{ padding: 0 }}>
            <img src={CartIcon} alt="Cart" className="navIcons" />
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Admin"
            style={{ padding: 0, display: "flex", alignItems: "center" }}
          >
            <Shield size={24} className="navIcons" />
          </Nav.Link>
          <Nav.Link as={Link} to="/personalProfile" style={{ padding: 0 }}>
            <img src={ProfileIcon} alt="Profile" className="navIcons" />
          </Nav.Link>
        </div>
      </div>
    </Navbar>
  );
}

export default Navigation;
