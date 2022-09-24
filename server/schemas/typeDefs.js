const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
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
    nextUser: User!
    me: User
  }

  type Mutation {
    addUser(
      name: String!
      email: String!
      password: String!
      age: Int 
      location: String
      looking_for: String
      work: String
    ): Auth

    addLike(
      userId: ID!
    ): Boolean

    addPass(
      userId: ID!
    ): User
    
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
