import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  // eslint-disable-next-line
  const [login, { error, data }] = useMutation(LOGIN);

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
      const { data } = await login({
        variables: { ...formState, },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
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
            <Card.Header className='bg-dark p-2'><h4 className="m-0">Login</h4></Card.Header>
            <Card.Body>
              {Auth.loggedIn() ? (
                <>
                  <Card.Title>{`Logged in as ${Auth.getUser().data.email}`}</Card.Title>
                  <Button onClick={logout}>Logout</Button>
                </>
              ) : (
                <Form onSubmit={handleFormSubmit}>
                  <Form.Control
                    size='lg'
                    className='my-2'
                    placeholder="Enter email"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <Form.Control
                    size='lg'
                    className="my-2"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  {error && (
                    <div className="my-3 p-3 bg-danger text-white">
                      {error.message}
                    </div>
                  )}
                </Form>)}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container >
  );
};

export default Login;
