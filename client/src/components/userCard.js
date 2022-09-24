import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



const UserCard = ({ firstName, lastName, email, location, age }) => {
  return (
    <Card style={{}}>
      <Card.Img variant="top" src="https://picsum.photos/200" />
      <Card.Body className='m-2'>
        <Card.Title>{`${firstName} ${age}`}</Card.Title>
        <Card.Subtitle className='text-muted'>{location}</Card.Subtitle>
      </Card.Body>
      <Card.Body>
        <Container className="align-content-center">
          <Row>
            <Col xs={{ span: 4, offset: 2 }}>
              <Button variant="link" size='lg'>Pass</Button>
            </Col>
            <Col>
              <Button variant="info" size='lg'>Like</Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card >
  );
};

export default UserCard;