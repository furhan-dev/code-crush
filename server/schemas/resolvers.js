const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password, age, location }) => {
      age = parseInt(age);
      const user = await User.create({ firstName, lastName, email, password, age, location });
      const token = signToken(user);

      return { token, user };

    },

    addLike: async (parent, { userId }, context) => {
      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { likes: userId } },
        { new: true }
      );
      const otherUser = await User.findOne({ _id: userId });
      if (otherUser.likes.includes(context.user._id)) {
        // update matches for both users
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { matches: userId } },
          { new: true }
        );
        await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { matches: context.user._id } },
          { new: true }
        );
        return true;
      }
      return false;
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
  },
};

module.exports = resolvers;
