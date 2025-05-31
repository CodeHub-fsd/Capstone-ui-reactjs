
//import { Form, Row, Col, Button } from 'react-bootstrap';
//import Map from './Map';
import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
//import { Card } from 'react-bootstarp/Card'
// CompanyLogo from './CompanyLogo/logo.png';




class Login extends React.Component {
    render() {
        return (
            <div className="ml-5 mr-5">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                     </Button>

                </Form>

            </div >

        )
    }
}

export default Login;