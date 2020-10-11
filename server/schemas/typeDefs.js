// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        book(id:ID!): [Book]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(title: String!, bookId: String!, link: String!,):User
        removeBook(bookId: String!):User
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: [Book]
        author(firstName: String, lastName: String): Auth
        description: String
        title: String
        link: String
    }
    
    type Auth {
        token: ID!
        user: User
    }
    `;


// export the typeDefs
module.exports = typeDefs;