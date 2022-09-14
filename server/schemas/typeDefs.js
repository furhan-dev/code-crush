const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    age: Int
    location: String
    work: String
    looking_for: String
    favorite_language: String
    likes: [User]
    passed: [User]
    matches: [User]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      age: Int! 
      location: String!
      looking_for: String
      work: String
    ): Auth
    
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
