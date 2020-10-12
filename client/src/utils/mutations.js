import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const SAVE_BOOK = gql ` 
    mutation saveBook($dataBook: BookInput!) {
        saveBook(dataBook: $dataBook) {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                description
                title
                link
                image
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookid: String!) {
        removeBook(bookId: $bookIid) {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                description
                title
                link
                image
            }
        }
    }
`;