const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {

    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
            const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                // .populate('thoughts')
                .populate('books')};

            return userData;
        }
    },

    //     throw new AuthenticationError('Not logged in');
    //     user: async (parent, { username }) => {
    //         return User.findOne({ username })
    //             .select('-__v -password')
    //             .populate('friends')
    //             .populate('books');
    //     },
    //     // books: async (parent, { query }) => {
    //     //     const params = books ? { guery } : {};
    //     //     return Book.find(params).sort({ createdAt: -1 });
    //     // },
    //     book: async () => {
    //         return Book.find()
    //         .populate('book');
    //     },
    //     // books: async (parent, { _id }) => {
    //     //     return Book.findOne({ _id });
    //     // },
    // },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        }
    }
};

module.exports = resolvers;