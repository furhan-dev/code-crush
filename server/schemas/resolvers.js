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

    // gets the next user from pool of users to display
    nextUser: async (parent, args, context) => {
      if (context.user) {
        // get all user ids
        const allUsers = await User.find().select("_id");
        const allIds = allUsers.map((user) => user._id);
        // get current user
        const currentUser = await User.findOne({ _id: context.user._id });
        // create list of seen users + current user
        const seenUsers = currentUser.passed.concat(currentUser.likes);
        seenUsers.push(context.user._id);
        // map ids to string for comparison
        const seenIds = seenUsers.map(ids => ids.toString());
        // filter ids if they've been seen by current user already
        const remainingIds = allIds.filter(id => !seenIds.includes(id.toString()));
        // return random user from remaining users
        if (remainingIds) {
          const randomUserId = remainingIds[Math.floor(remainingIds.length * Math.random())];
          return User.findOne({ _id: randomUserId });
        } else {
          return null;
        }
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
