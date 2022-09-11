const { AuthenticationError } = require('apollo-server-express');
const { User, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { firstName, lastName }) => {
      return User.findOne({ firstName, lastName });
    },
    comments: async () => {
      return Comment.find();
    }
    
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
      
    },
    
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }

      throw new AuthenticationError('Not logged in');
    },
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addComment: async (parent, { comment,name,email }) => {
      const comments = await Comment.create({comment,name,email});
      return { comments };
    },
  },
};

module.exports = resolvers;
