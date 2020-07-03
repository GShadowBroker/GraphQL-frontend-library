import { gql } from '@apollo/client'

export const GET_USER = gql`
    query {
        me {
            username
            friends {
                username
                id
            }
            friend_requests {
                username
                id
            }
            id
        }
    }
`

export const GET_USERS = gql`
    query {
        allUsers {
            username
            favoriteGenre
            id
            friends {
                username
                id
            }
            friend_requests {
                username
                id
            }
        }
    }
`

export const GET_STATS = gql`
    query {
        bookCount
        authorCount
    }
`
export const GET_AUTHORS = gql`
    query {
        allAuthors {
            id
            name
            born
            books {
                id
            }
        }
    }
`

export const GET_BOOKS = gql`
    query {
        allBooks {
            id
            title
            author {
                name
            }
            published
        }
    }
`

export const CREATE_BOOK = gql`
    mutation createBook(
        $title: String!,
        $author: String!,
        $published: Int!,
        $genres: [String]!
    ) {
        addBook(
            title: $title,
            author: $author,
            published: $published,
            genres: $genres
        ) {
            title,
            author {
                name
            },
            published,
            genres
        }
    }
`
export const UPDATE_AUTHOR = gql`
    mutation updateAuthor(
        $name: String!,
        $setBornTo: Int!
    ) {
        editAuthor(
            name: $name,
            setBornTo: $setBornTo
        ) {
            name,
            born,
            books {
                title
            },
            id
        }
    }
`

export const LOGIN = gql`
    mutation login(
        $username: String!,
        $password: String!
    ) {
        login(
            username: $username,
            password: $password
        ) {
            username
            id
            value
        }
    }
`
export const SEND_FRIEND_REQUEST = gql`
    mutation sendFriendRequest(
            $id: ID!
        ) {
            requestFriend(
                id: $id
            ) {
                username
                id
            }
        }
`