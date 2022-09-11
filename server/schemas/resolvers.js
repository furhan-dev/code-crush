const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { firstName, lastName }) => {
      return User.findOne({ firstName, lastName });
    },

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

    addLike: async (parent, { input }, context) => {
      if (context.user) {
        const userLikes = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { likes: input } },
          { new: true }
        );
        return userLikes;
      }
      throw new AuthenticationError('You must be logged in.');
    },

    addPass: async (parent, { input }, context) => {
      if (context.user) {
        const userPassed = await User.findOneAndUpdate(
          { _id: context.user._id }, 
          { $addToSet: { passed: input } }, 
          { new: true }
        )
        return userPassed;
      }
      throw new AuthenticationError('You must be logged in.');
    }
  },
};

module.exports = resolvers;
