import React from 'react';
import './footer.css';
import { NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';
import { FaAndroid, FaApple, FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import AboutUs from './modals/about.jsx';
import Contact from './modals/contact.jsx';
import Faq from './modals/faq.jsx';
import MentionsLegales from './modals/mentions-legales.jsx';
export default class Footer extends React.Component {

  render() {
    return (
      <div className='footer-content'>
        <Container>
          <Row>
            <Col className="align-footer-left" xs="12" md="6">
              <Nav className="on-line">
                <Row>
                  <Col xs="12">
                    <NavItem>
                      <MentionsLegales />
                    </NavItem>
                    <NavItem>
                      <Faq />
                    </NavItem>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <NavItem>
                      <AboutUs />
                    </NavItem>
                    <NavItem>
                      <Contact />
                    </NavItem>
                  </Col>
                </Row>
              </Nav>
            </Col>
            <Col xs="12" md="6" className="align-footer-right align-items-center">
              <Nav>
                <NavItem>
                  <NavLink href="/components" className="android">< FaAndroid className='footer-icons' size="40px" /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components" className="apple">< FaApple className='footer-icons' size="40px" /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components" className="twitter">< FaTwitter className='footer-icons' size="40px" /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components" className="facebook">< FaFacebookSquare className='footer-icons' size="40px" /></NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}