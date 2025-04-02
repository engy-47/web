import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaYoutube, FaInstagram } from "react-icons/fa";
import "./footer.css";

const FooterComponent = () => {
  return (
    <footer>
      <div className="newsletter-section">
        <h3>Subscribe Our Newsletter</h3>
        <Form className="newsletter-form">
          <Form.Control type="email" placeholder="Enter Email Address" />
          <Button variant="dark">Subscribe</Button>
        </Form>
      </div>

    
      <div className="footer-main">
        <Container>
          <Row>
            <Col md={3} sm={6}>
              <h4 className="footer-logo">Shopwise</h4>
              <p>If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text</p>
              <div className="social-icons">
                <FaFacebookF />
                <FaTwitter />
                <FaGooglePlusG />
                <FaYoutube />
                <FaInstagram />
              </div>
            </Col>

            <Col md={3} sm={6}>
              <h5>Useful Links</h5>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">Affiliates</a></li>
                <li><Link to="/contact">Contact</Link></li> 
              </ul>
            </Col>

            
            <Col md={3} sm={6}>
              <h5>Category</h5>
              <ul>
                <li><a href="/products">All</a></li>
                <li><a href="/products">Men</a></li>
                <li><a href="/products">Women</a></li>
                <li><a href="/products">Jewelry</a></li>
                <li><a href="/products">Electronics</a></li>
              </ul>
            </Col>
            <Col md={3} sm={6}>
              <h5>Contact Info</h5>
              <p>📍 123 Street, Old Trafford, New South London, UK</p>
              <p>📧 info@sitename.com</p>
              <p>📞 +457 789 789 65</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container className="text-center">
          <p>© 2024 All Rights Reserved by Shopwise</p>
          <div className="payment-icons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/120px-Visa.svg.png" alt="Visa" />
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default FooterComponent;


