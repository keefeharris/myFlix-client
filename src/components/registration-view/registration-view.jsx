import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import CardGroup from 'react-bootstrap/cardgroup';
import Card from 'react-bootstrap/card';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';

export function RegisterView(props) {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [Email, setEmail] = useState('');
    const [Birthday, setBirthday] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(Username, Password, Email, Birthday);
        props.onRegistered(Username);
    };

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Sign Up Now!</Card.Title>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control type='text' placeholder='Enter Username' value={Username} onChange={e => setUsername(e.target.value)} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type='text' placeholder='Enter Password' value={Password} onChange={e => setPassword(e.target.value)} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type='email' placeholder='Enter E-Mail' value={Email} onChange={e => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Birthday:</Form.Label>
                                    <Form.Control type='date' placeholder='Enter Birthday' value={Birthday} onChange={e => setBirthday(e.target.value)} />
                                </Form.Group>
                                <Button variant='primary' type='submit'>Register</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

RegisterView.propTypes = {
    login: PropTypes.shape({
        Username: PropTypes.string.isRequired,
        Password: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
        Birthday: PropTypes.string.isRequired
    }),
    onRegistered: PropTypes.func.isRequired
};