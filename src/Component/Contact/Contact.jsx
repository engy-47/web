import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-header">
        <Container>
          <h2 className="contact-title">Contact</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/products">Products</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </Container>
      </div>
      <Container className="contact-container">
        <Row className="justify-content-center">
          <Col md={4}>
            <Card className="contact-card">
              <Card.Body className="text-center">
                <div className="icon-container">
                  <FaMapMarkerAlt className="contact-icon" />
                </div>
                <Card.Title>Address</Card.Title>
                <Card.Text>123 Street, Old Trafford, London, UK</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="contact-card">
              <Card.Body className="text-center">
                <div className="icon-container">
                  <FaEnvelope className="contact-icon" />
                </div>
                <Card.Title>Email Address</Card.Title>
                <Card.Text>info@yourmail.com</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="contact-card">
              <Card.Body className="text-center">
                <div className="icon-container">
                  <FaPhoneAlt className="contact-icon" />
                </div>
                <Card.Title>Phone</Card.Title>
                <Card.Text>+457 789 789 65</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="contact-section">
        <Row>
          <Col md={6}>
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit massa enim.
            </p>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Enter Name *" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Enter Email *" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Enter Phone No. *" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Enter Subject" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Message *" required />
              </Form.Group>
              <Button className="contact-btn" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>

          <Col md={6}>
            <div className="map-container">
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Brooklyn,NY`}
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;

