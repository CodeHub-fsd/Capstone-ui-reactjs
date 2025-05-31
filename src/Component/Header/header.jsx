import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
    render() {
        return (
            <div>

                <Navbar bg="light" variant="white">

                    <Col>
                        <Row>
                            <Col>
                                {/* <Navbar.Brand href="#home">InsuranceTypes</Navbar.Brand> */}
                                <Navbar.Brand href="./dashboard">Dashboard</Navbar.Brand>
                                <Navbar.Brand href="/administrator">Administrator</Navbar.Brand>
                            </Col>
                            <Col >
                            </Col>
                            <h3>MI CAR INSURANCE</h3>
                            <Col>
                                {/* <Navbar.Brand href="#home">CarSecurity</Navbar.Brand> */}
                            </Col>

                            <Col>
                                <Navbar.Brand href="./dashboard">
                                    <img
                                        alt=""
                                        src="/allstate.jpg"
                                        width="100vw"
                                        height="50vh"
                                        className="d-inline-block align-top"
                                    />
                                </Navbar.Brand>
                            </Col>
                        </Row>

                    </Col>
                </Navbar>

            </div >
        )
    }
}

export default Header;
