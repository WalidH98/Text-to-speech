import React from 'react';
import './footer.css';
import { NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';
import { FaAndroid, FaApple, FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import AboutUs from './modals/about.jsx';
import Contact from './modals/contact.jsx';
import Faq from './modals/faq.jsx';
import MentionsLegales from './modals/mentions-legales.jsx'
export default class Footer extends React.Component {

    render() {
        return (
            <div className="footer-content">
                <Container>
                    <Row>
                        <Col xs="6">
                            <Nav>
                                <Row>
                                    <Col xs="12">
                                        <NavItem>
                                            <MentionsLegales/>
                                        </NavItem>
                                        <NavItem>
                                            <Faq/>
                                        </NavItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <NavItem>
                                            <AboutUs/>
                                        </NavItem>
                                        <NavItem>
                                            <Contact/>
                                        </NavItem>  
                                    </Col>
                                </Row>
                            </Nav>
                        </Col>
                        <Col xs="6" className="d-flex justify-content-end align-items-center">
                            <Nav>
                                <NavItem>
                                    <NavLink href="/components" className="android">< FaAndroid className='footer-icons' size="30px"/></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components" className="apple">< FaApple className='footer-icons' size="30px"/></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components" className="twitter">< FaTwitter className='footer-icons' size="30px"/></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components" className="facebook">< FaFacebookSquare className='footer-icons' size="30px"/></NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}