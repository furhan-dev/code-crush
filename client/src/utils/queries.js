import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($name: String!) {
    user(name: $name) {
      id
      name
      email
      permission
    }
  }
`;

export const NEXT_USER = gql`
  query nextUser {
    user {
      id
      name
    }
  }
`;

export const USER_MATCHES = gql`
  query me {
    me {
      id
      matches
    }
  }  
`

export const QUERY_COMMENT = gql`
  query getComments {
    comments {
      _id
      comment
      name
      date_created
      email
    }
  }
`;


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      permission
    }
  }
`;

export const SINGLE_USER = gql`
  query singleUser($email: String!) {
    user(email: $email) {
      name
      permission
    }
  }
`;