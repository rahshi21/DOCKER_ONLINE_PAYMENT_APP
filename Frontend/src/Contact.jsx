import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Contact.css';
import Navbar from './Navbar';

function Contact() {
  return (
    <div className="contact-page">
      <Navbar />
      <Container className="contact-container">
        <section className="intro-section">
          <p id='one'>Welcome! Need assistance?</p>
          <p id='two'> Connect with us effortlessly through our diverse channels or simply drop us a message using the contact form below. We're here to make your experience seamless and enjoyable.</p>
        </section>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="person-card">
              <div className="person-avatar">
                <Image
                  src="/IMAGES/rahshitha.jpg"
                  height="150px"
                  width="150px"
                  roundedCircle
                  className="avatar"
                />
              </div>
              <div className="person-info">
                <h3>RAHSHITHA</h3>
                <div className="person-links">
                  <a href="https://www.facebook.com/rahshi21" target="_blank" rel="noopener noreferrer">
                    {/* <i className="fab fa-facebook-square fa-lg"></i> */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="FACEBOOK" id='image'/>
                  </a>
                  <a href="https://www.instagram.com/rahshi21/" target="_blank" rel="noopener noreferrer">
                    {/* <i className="fab fa-twitter-square fa-lg"></i> */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="INSTAGRAM" id='image'/>
                  </a>
                  <a href="https://twitter.com/rahshi21" target="_blank" rel="noopener noreferrer">
                    {/* <i className="fab fa-instagram-square fa-lg"></i> */}
                    <img src="https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png" alt="TWITTER" id='image'/>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="person-card">
              <div className="person-avatar">
                <Image
                  src="/IMAGES/sneha.jpg"
                  height="150px"
                  width="150px"
                  roundedCircle
                  className="avatar"
                />
              </div>
              <div className="person-info">
                <h3>SNEHAVARSHINI</h3>
                <div className="person-links">
                  <a href="https://www.facebook.com/snehavarshini1007" target="_blank" rel="noopener noreferrer">
                    {/* <i className="fab fa-facebook-square fa-lg"></i> */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="FACEBOOK" id='image'/>
                  </a>
                  <a href="https://www.instagram.com/sneha_varshini_07/" target="_blank" rel="noopener noreferrer">
                    {/* <i className="fab fa-twitter-square fa-lg"></i> */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="INSTAGRAM" id='image'/>
                  </a>
                  <a href="https://twitter.com/snehavarshini07" target="_blank" rel="noopener noreferrer">
                    {/* <i className="fab fa-instagram-square fa-lg"></i> */}
                    <img src="https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png" alt="TWITTER" id='image'/>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <section className="contact-form-section">
          <p id='one'>Reach us here</p>
          <p id='two'>Have a question or inquiry? Fill out the form below and we'll get back to you shortly.</p>
          <form className='contact-form'>
            <Row>
              <Col md={3}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
              </Col>
              <Col md={3}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </Col>
              <Col md={3}>
                <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="2" required ></textarea>
              </div>
              </Col>
            </Row>
            <Button variant="primary" type="submit">Share the message</Button>
          </form>
        </section>
        
      </Container>
      <footer className="footer">
        <p className="text-footer">
          Copyright © [Year] KEC Swaram. All rights reserved.
        </p>
      </footer> 
    </div>
  );
}

export default Contact;
