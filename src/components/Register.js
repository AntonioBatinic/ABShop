import React, { Component } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';
  import { ProductConsumer } from '../context';
  import {Link} from 'react-router-dom';

export default class Register extends Component {
    render() {
      return (
        <Container className="App col-8 mx-auto mt-5 col-md-6 col-lg-4 text-center">
          <h2 className="mb-5">Register</h2>
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
                <Label for="username">Username</Label>
                <Input
                  type="username"
                  name="username"
                  id="username"
                  placeholder="Username"
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
            <Col>
              <FormGroup>
                <Label for="examplePassword">Confirm password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
                />
              </FormGroup>
            </Col>
            <ProductConsumer>
              { (value) => {
                const {authorizeUser} = value;
             return(
            <Link to="/">
            <Button onClick={() => authorizeUser()}>Submit</Button>
            </Link>
            
             )}}</ProductConsumer>
  
             <Link to="/login" >
            <h4 className="text-danger mt-4">Already registered?</h4>
            <h4 className="text-danger">Login here</h4>
            </Link>
          </Form>
        </Container>
      );
    }
  }
