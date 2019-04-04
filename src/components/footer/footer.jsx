import React from 'react';
import './footer.css';
import { NavItem, NavLink, Nav } from 'reactstrap';
import { FaAndroid, FaApple, FaFacebookSquare, FaTwitter } from 'react-icons/fa';
export default class Footer extends React.Component {

    render() {
        return (
            <div className="footer-content">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Nav>
                                <div className="row">
                                    <div className="col-12">
                                        <NavItem>
                                            <NavLink href="/components/" className="footer-nav-links">Mentions légales</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="/components/" className="footer-nav-links">FAQ</NavLink>
                                        </NavItem>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <NavItem>
                                            <NavLink href="/components/" className="footer-nav-links">Aide</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="/components/" className="footer-nav-links">Contact</NavLink>
                                        </NavItem>  
                                    </div>
                                </div>
                            </Nav>
                        </div>
                        <div className="col-6 d-flex justify-content-end align-items-center">
                            <Nav>
                                <NavItem>
                                    <NavLink href="/components/" className="android">< FaAndroid size={30}/></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/" className="apple">< FaApple size={30}/></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/" className="twitter">< FaTwitter size={30}/></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/" className="facebook">< FaFacebookSquare size={30}/></NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}