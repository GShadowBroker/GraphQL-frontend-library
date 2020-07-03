import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from 'apollo-link-context'

const authLink = setContext((_, { headers }) => {
    const token = JSON.parse(localStorage.getItem('libraryUser')).value
    return {
        headers: {
            ...headers,
            authorization: token ? `bearer ${token}` : null,
        }
    }
})

const httpLink = new HttpLink({ uri: '/' })

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
})

export default client