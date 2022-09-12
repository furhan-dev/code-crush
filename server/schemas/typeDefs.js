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
    favorite_language: [String]
    likes: [User]
    passed: [User]
  }

  type Comment {
    _id: ID
    comment: String
    name: String
    date_created: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  input userSwipe {
    _id: ID
    firstName: String
    lastName: String
    age: Int
    location: String
    work: String
    favorite_language: [String]
  }

  input userMatch {
    _id: ID
    firstName: String
    lastName: String
    age: Int
    email: String
    location: String
    work: String
    favorite_language: [String]
  }

  type Query {
    user(_id: ID!): User
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
      looking_for: String!
      work: String
    ): Auth
    
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
      age: Int
      location: String
      looking_for: String
      work: String
    ): Auth

    addComment(comment: String, name: String, email: String): Comment

    login(email: String!, password: String!): Auth

    addLike(input: userSwipe): User

    addPass(input: userSwipe): User

    addMatch(input: userMatch): User
  }
`;

module.exports = typeDefs;
