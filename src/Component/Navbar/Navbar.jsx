import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { FaShoppingCart, FaSearch, FaUser, FaPhone, FaHeart, FaExchangeAlt } from "react-icons/fa";
import { NavLink, Link, useNavigate } from "react-router-dom";
import LightButton from "../../assets/light-mode-button.png";
import DarkButton from "../../assets/dark-mode-button.png";
import "./navbar.css";

const Navbarr = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); 
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <>
      <div className="top-navbar">
        <Container className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="left-section d-flex flex-wrap">
            <span className="me-3">🌍 English ▼</span>
            <span className="me-3">💲 USD ▼</span>
            <span className="me-3">
              <FaPhone /> 123-456-7890
            </span>
          </div>
          <div className="right-section">
            <Nav className="top-icons d-flex">
              <Nav.Link as={Link} to="/compare" className="me-3">
                <FaExchangeAlt /> Compare
              </Nav.Link>
              <Nav.Link as={Link} to="/wishlist" className="me-3">
                <FaHeart /> Wishlist
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="me-3">
                <FaUser /> Login
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </div>
      <Navbar expand="lg" className="main-navbar fixed-top">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-4">
            <FaShoppingCart className="me-2" />
            Shopwise
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} to="/" exact>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Contact us</Nav.Link>
            </Nav>

            <Form className="d-flex search-form" onSubmit={handleSearch}>
              <FormControl
                type="text"
                placeholder="Search"
                className="search-box me-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-button">
                <FaSearch />
              </button>
            </Form>
            <Nav className="icons">
              <Nav.Link as={NavLink} to="/cart">
                <FaShoppingCart />
                <span className="cart-badge">2</span>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/login">
                <FaUser />
              </Nav.Link>
            </Nav>
            <div className="theme-switch">
              <img
                src={theme === "light" ? LightButton : DarkButton}
                alt="Theme Switch"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="theme-icon"
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarr;





