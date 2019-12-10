import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import '../../src/App.css';

class Log extends Component {
    render() {
        return (
            <Container className="App">

                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                            />
                        </FormGroup>
                    </Col>
                    <Button>Enter</Button>
                    <Button className="btn" href="" >
                        <Link to="/signup">
                            <li>             Create User
                                </li>
                        </Link>





                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Log;