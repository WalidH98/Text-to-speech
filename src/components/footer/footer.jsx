import React from 'react';
import './footer.css';
import { NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';
import { FaAndroid, FaApple, FaFacebookSquare, FaTwitter } from 'react-icons/fa';
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
                                            <NavLink href="/components/" className="footer-nav-links">Mentions légales</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="/components/" className="footer-nav-links">FAQ</NavLink>
                                        </NavItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <NavItem>
                                            <NavLink href="/components/" className="footer-nav-links">Aide</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="/components/" className="footer-nav-links">Contact</NavLink>
                                        </NavItem>  
                                    </Col>
                                </Row>
                            </Nav>
                        </Col>
                        <Col xs="6" className=" d-flex justify-content-end align-items-center">
                            <Nav>
                                <NavItem>
                                    <NavLink href="/components/" className="android">< FaAndroid className='footer-icons' size="30px"/></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/" className="apple">< FaApple className='footer-icons' size="30px"/></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/" className="twitter">< FaTwitter className='footer-icons' size="30px"/></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/" className="facebook">< FaFacebookSquare className='footer-icons' size="30px"/></NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}