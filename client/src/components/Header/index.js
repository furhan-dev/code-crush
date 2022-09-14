import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

import './index.css';
import Auth from '../../utils/auth';

function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <Navbar className='mb-4' collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className='me-5'>
            <div className='brand-font'>
              Code Crush
            </div>
            <div className='brand-subheader-font'>
              you.date(softwareDeveloper);
            </div>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto link-font">
            {Auth.loggedIn() ? (
              <>
                <LinkContainer to="/">
                  <Nav.Link>Profile</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">
                  <Nav.Link>Matches</Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <></>
            )}
          </Nav>
          <Nav className='link-font'>
            {Auth.loggedIn() ? (
              <>
                <LinkContainer to="/signup">
                  <Nav.Link onClick={logout}>Logout</Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <>
                <LinkContainer to="/signup">
                  <Nav.Link className='me-3'>Create Account</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;