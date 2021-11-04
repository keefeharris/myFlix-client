import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/card';

import './login-view.scss';


export function LoginView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        /* Send a request to the server for authentication */
        /* then call props.onLoggedIn(username) */
        props.onLoggedIn(username);
    };

    return (
        <Container fluid className="loginContainer">
            <Row>
                <Col xs={2} sm={2} md={3} lg={4} xl={4}></Col>
                <Col xs={8} sm={8} md={6} lg={4} xl={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Welcome to MyFlix</Card.Title>
                            <Form>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
                                <Button variant="primary" onClick={props.onOpenRegisterPage}>Register</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={2} sm={2} md={3} lg={4} xl={4}></Col>
            </Row>
        </Container>
    );
}

LoginView.propType = {
    login: PropTypes.shape({
        Username: PropTypes.string.isRequired,
        Password: PropTypes.string.isRequired
    }),
    onLoggedIn: PropTypes.func.isRequired,
    onOpenRegisterPage: PropTypes.func.isRequired
};
