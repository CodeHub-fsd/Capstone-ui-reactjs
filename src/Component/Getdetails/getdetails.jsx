import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';


class getdetails extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPrefix">
                        <Form.Label> Prefix:</Form.Label>
                        <Form.Control value={this.props.drivers.title} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>FirstName:</Form.Label>
                        <Form.Control value={this.props.drivers.firstName} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLastname">
                        <Form.Label>LastName</Form.Label>
                        <Form.Control value={this.props.drivers.lastName} />
                    </Form.Group>
                </Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="number">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control value={this.props.drivers.phone} />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control value={this.props.drivers.address1} />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control value={this.props.drivers.address2} />
                </Form.Group>

                <Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>City</Form.Label>
                        <Form.Control value={this.props.drivers.city} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLastname">
                        <Form.Label>State</Form.Label>
                        <Form.Control value={this.props.drivers.state} />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>Vehicle body style</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLastname">
                        <Form.Control value={this.props.drivers.model} />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>Engine Capacity (cc)</Form.Label>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastname">
                        <Form.Control value={this.props.drivers.engine} />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>How many additional drivers will there be?</Form.Label>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastname">
                        <Form.Control value={this.props.drivers.driver} />
                    </Form.Group>
                </Row>
                <Row>
                    <Col sm><Form.Label htmlFor="inputPassword6">Will the vehicle be used for commercial purpose?</Form.Label></Col>
                    <Col >
                        <Form.Control value={this.props.drivers.commercial} />
                    </Col>
                </Row>
                <br></br>

                <Row>
                    <Col sm><Form.Label htmlFor="inputPassword6">Will the vehicle be used outside the registered state?</Form.Label></Col>
                    <Col sm>
                        <Form.Control value={this.props.drivers.outstate} />
                    </Col>
                </Row >

                <br></br>
                <Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>Curent market value</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLastname">
                        <Form.Control value={this.props.drivers.marketValue} />
                    </Form.Group>
                </Row>

                <Row>
                    <Col sm><Form.Label htmlFor="inputPassword6">When was the vehicle first registered?</Form.Label></Col>
                    <Col sm>
                        <Form.Control value={this.props.drivers.date} />
                    </Col>
                </Row>
                <br></br>

                <Row>
                    <Col sm><Form.Label htmlFor="inputPassword6">Final Quote Amount: </Form.Label></Col>
                    <Col sm>
                        <Form.Control value={this.props.drivers.finalQuoteAmount} />
                    </Col>
                </Row>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control value={this.props.drivers.message} />
                </Form.Group>
            </div >
        )
    }
}

export default getdetails
