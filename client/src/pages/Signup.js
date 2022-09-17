import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import { LinkContainer } from 'react-router-bootstrap';

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: '',
    location: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState, age: parseInt(formState.age) },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Container fluid>
      <Row className="justify-content-xs-center">
        <Col xs="12" lg={{ span: 8, offset: 2 }}>
          <Card>
            <Card.Header className='bg-dark p-2'><h4 className="m-0">Create Account</h4></Card.Header>
            <Card.Body>
              {Auth.loggedIn() ? (
                <>
                  <Card.Title>{`Account already created for ${Auth.getUser().data.email}`}</Card.Title>
                  <LinkContainer to='/profile'>
                    <Button className='me-2'>Profile</Button>
                  </LinkContainer>
                  <Button onClick={logout}>Logout</Button>
                </>
              ) : (
                <Form onSubmit={handleFormSubmit}>
                  <Form.Control
                    size='lg'
                    className="my-2"
                    placeholder="First Name"
                    name="firstName"
                    type="text" required
                    value={formState.firstName}
                    onChange={handleChange}
                  />
                  <Form.Control
                    size='lg'
                    className="my-2"
                    placeholder="Last Name"
                    name="lastName"
                    type="text" required
                    value={formState.lastName}
                    onChange={handleChange}
                  />
                  <Form.Control
                    size='lg'
                    className="my-2"
                    placeholder="Email"
                    name="email"
                    type="email" required
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <Form.Control
                    size='lg'
                    className="my-2"
                    placeholder="Password"
                    name="password"
                    type="password" required
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <Form.Control
                    size='lg'
                    className="my-2"
                    placeholder="Age"
                    name="age"
                    type="number" required
                    value={formState.age}
                    onChange={handleChange}
                  />
                  <Form.Control
                    size='lg'
                    className="my-2"
                    placeholder="Location"
                    name="location"
                    type="text" required
                    value={formState.location}
                    onChange={handleChange}
                  />
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  {error && (
                    <div className="my-3 p-3 bg-danger text-white">
                      {error.message.includes('duplicate key')
                        ? `Account with email '${formState.email}' already exists!`
                        : 'Server Error'}
                    </div>
                  )}
                </Form>)}
            </Card.Body>
          </Card>
        </Col>
      </Row >
    </Container >
  );
};

export default Signup;
