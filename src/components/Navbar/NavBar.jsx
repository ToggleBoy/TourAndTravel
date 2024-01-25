import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import call from "../../assets/icons/call.png";
import location from "../../assets/icons/location.png";
import mail from "../../assets/icons/mail.png";
import twitter from "../../assets/icons/twitter.png";
import insta from "../../assets/icons/insta.png";
import youtube from "../../assets/icons/youtube.png";
import linkedin from "../../assets/icons/linkedin.png";
import fb from "../../assets/icons/fb.png";

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className={`sticky-header ${scrolling ? "hidden" : ""}`}>
        <div className="contact-links">
          <div>
            <img src={location} />
            <a>India, India</a>
          </div>
          <div>
            <img src={call} />
            <a>+91 9090909090</a>
          </div>
          <div>
            <img src={mail} />
            <a>Test@Example.com</a>
          </div>
        </div>
        <div className="social-icons">
          <img src={twitter} />
          <img src={insta} />
          <img src={linkedin} />
          <img src={fb} />
          <img src={youtube} />
        </div>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${
          scrolling ? "scrolling after-scroll-navbar" : "initial-scroll-navbar"
        }`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="nav-links">
            <Nav>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/action/3.1">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action/3.2">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
