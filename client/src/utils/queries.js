import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      firstName
      lastName 
      email
      age
      location 
      looking_for 
      favorite_language
      work
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName 
      email
      age
      location 
      looking_for 
      favorite_language
      work
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName 
      email
      age
      location 
      looking_for 
      favorite_language
      work
    }
  }
`;

export const QUERY_NEXT_USER = gql`
  query nextUser {
    nextUser {
      _id
      firstName
      lastName 
      email
      age
      location 
      looking_for 
      favorite_language
      work
    }
  }
`;
