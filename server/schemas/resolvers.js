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
                // .populate('book')};

            return userData;
        }
    
    //     throw new AuthenticationError('Not logged in');
    // },
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return new { token, user };
        },
        // login: async (parent, { email, password }) => {
        //     const user = await User.findOne({ email });

        //     if(!user) {
        //         throw new AuthenticationError('Incorrect credentials');
        //     }

        //     const correctPw = await user.isCorrectPassword(password);

        //     if (!correctPw) {
        //         throw new AuthenticationError('Incorrect credentials');
        //     }

        //     const token = signToken(user);
        //     return { token, user };
        // },
        // saveBook: async(parent,{ bookId, book }) => {
        //     const book = await Book.findOneAndUpdate(
        //         {_id: bookId },
        //         { $push: {book: {bookId, userData: context.user.populate }}},
        //         { new: true, runValidators: true }
        //         );
        //     return User;
        // }
               // removeBook: async(parent,{ bookId, book }) => {
        //     const book = await Book.findOneAndUpdate(
        //         {_id: bookId },
        //         { $pull: {book: {bookId, userData: context.user.populate }}},
        //         { new: true, runValidators: true }
        //         );
        //     return User;
        // }

        // saveBook(bookData: BookInput):User
        // removeBook(bookId: ID!):User

        // remove a book from `savedBooks`
//   async deleteBook({ user, params }, res) {
//     const updatedUser = await User.findOneAndUpdate(
//       { _id: user._id },
//       { $pull: { savedBooks: { bookId: params.bookId } } },
//       { new: true }
//     );
//     if (!updatedUser) {
//       return res.status(404).json({ message: "Couldn't find user with this id!" });
//     }
//     return res.json(updatedUser);
    }

};

module.exports = resolvers;