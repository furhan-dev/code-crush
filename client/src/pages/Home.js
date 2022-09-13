
import IMAGES from '../components/images';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  Nav,Button, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from '../pages/Signup';
import LoginForm from '../pages/Login';
import myImage from '../assets/imgs/logo.png'


import Auth from '../utils/auth';



function Home() {
  const [showModal, setShowModal] = useState(false);

  return (

    <>
     
      <div className="mb-2 col-md-12 text-center">
      <img 
              ClassName= 'm-auto' width='100px' src={myImage} />
        <h1>CODE CRUSH</h1>
        <h2>Always Free!</h2>
        <Button onClick={() => setShowModal(true)}>CREATE ACCOUNT </Button>
         
         {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
            <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
             
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    

    </div>
    </>
  );
}




export default Home