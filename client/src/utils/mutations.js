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
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $age: Int!, $location: String!, $looking_for: String!, $work: String ) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, age: $age, location: $location, looking_for: $looking_for, work: $work) {
      token
      user {
        _id
        firstName
        lastName 
        age
        location 
        looking_for 
        work
      }
    }
  }
`;

// export const SINGLE_USER = gql`
//   mutation singleUser($email: String!) {
//     user(email: $email) {
//         name
//         permission
//     }
//   }
// `;
