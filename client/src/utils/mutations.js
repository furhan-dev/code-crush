import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        permission
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($comment: String!,$name: String,$email: String) {
    addComment(comment: $comment,name:$name,email:$email) {
      _id
      comment
      name
      email
    }
  }
`;

export const SINGLE_USER = gql`
  mutation singleUser($email: String!) {
    user(email: $email) {
        name
        permission
    }
  }
`;
