import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                bookCount
                savedBooks
            }
        }
    }
`;

export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser($username: $username, email: $email, password: $password) {
            token
            user {
            _id
            username
            email
            bookCount
            savedBooks
        }
    }
}
`;

export const SAVE_BOOK = gql ` 
    mutation saveBook($id: ID!) {
        saveBook(id: $id) {
            bookId
            authors
            description
            title
            link
            image
    }
}
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($id: ID!) {
        removeBook(id: $id) {
            bookId
            authors
            description
            title
            link
            image
        }
    }
`;