import React from "react";
import './Navbar.css'
import {Container, Navbar, Nav} from "react-bootstrap";
import Logo from '../../assets/images/jamark.jpg'

const Header = () => {
    return (
        <div>
            <div className="Nav">
                <ul>
                    <li><i className="fas fa-chevron-right"></i> </li>
                    <li><i className="fas fa-circle"></i> USDT 521/$</li>
                    <li><i className="fab fa-bitcoin"></i> 519/$</li>
                    <li><i className="fab fa-whatsapp"></i> <a href="tel:+2349067551041"> 0906 755 1041</a> </li>
                    <li><i className="fas fa-map-marker-alt"></i> <span className="Address"> Festac Lagos State</span> </li>
                </ul>
            </div>

            <div>
                <Navbar className="Navbar">
                    <Container>
                        <Navbar.Brand href="#home" className="Brand">
                            <img
                                src={Logo}
                                className="d-inline-block align-top img-fluid"
                                alt="Jamark logo"
                            />
                            Jamark <span className="Exchange"> Exchange</span> </Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link className="Nav-Link" href="#features">Rates</Nav.Link>
                            <Nav.Link className="Nav-Link" href="#pricing">Sell Bitcoins</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

            </div>
        </div>
    )
}
export default Header
