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
    looking_for: LookingFor
    favorite_language: [String]
    likes: [User]
    passed: [User]
  }

  # not sure if this works
  type LookingFor {
    network: Boolean
    date: Boolean
    friends: Boolean
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    user(_id: ID!): User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      age: Int!
      location: String!
      work: String
    ): Auth
    
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
