import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
import UserCard from '../components/UserCard';

const Matches = () => {
  const { userId } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    userId ? QUERY_SINGLE_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_USER` query
  const user = data?.me || data?.user || {};

  // Use React Router's `<Navigate />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getUser().data._id === userId) {
    return <Navigate to="/matches" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.email) {
    return (
      <h4>
        You need to be logged in to see your matches page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <Container fluid>
      {!user.matches ? (
        <h4>
          No Matches! :(
        </h4>
      ) : (
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: user.matches.length }).map((_, idx) => (
            <Col>
              <UserCard />
            </Col>
          ))}
        </Row>)}
    </Container>
  );
};

export default Matches;
