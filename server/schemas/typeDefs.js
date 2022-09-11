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

  type Query {
    user(_id: ID!): User
    comments: [Comment]
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

    addComment(comment: String,name: String,email:String): Comment

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
