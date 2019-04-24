import React from 'react';
import './assets/css/footer.scss';
import { NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';
import { FaAndroid, FaApple, FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import AboutUs from './modals-footer/about.jsx';
import Contact from './modals-footer/contact.jsx';
import Faq from './modals-footer/faq.jsx';
import MentionsLegales from './modals-footer/mentions-legales.jsx';
export default class Footer extends React.Component {

  render() {
    return (
      <div className='footer-content'>
        <Container>
          <Row>
            <Col xs="12">
              <div className="d-flex flex-row justify-content-around">
                <MentionsLegales />
                <Faq />
                <AboutUs />
                <Contact />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className="d-flex justify-content-center foot-icons">
              <Nav>
                <NavItem>
                  <NavLink href="https://www.android.com/" className="android for-responsive">< FaAndroid className='footer-icons' size="30px" /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.apple.com/fr/ios/app-store/" className="apple for-responsive">< FaApple className='footer-icons' size="30px" /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://twitter.com/?lang=fr" className="twitter for-responsive">< FaTwitter className='footer-icons' size="30px" /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://fr-fr.facebook.com/" className="facebook for-responsive">< FaFacebookSquare className='footer-icons' size="30px" /></NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}