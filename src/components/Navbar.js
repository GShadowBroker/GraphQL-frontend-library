import React from 'react'
import { Nav, Menu, NavContainer, UserPanel, OutlinedButton } from '../styles/layout'
import { Link, useLocation } from 'react-router-dom'
import { useQuery, useApolloClient } from '@apollo/client'
import { GET_USER } from '../services/queries'

const Navbar = ({ updateToken }) => {
    const location = useLocation()
    const { error, loading, data } = useQuery(GET_USER)
    const client = useApolloClient()

    const handleLogout = () => {
        window.localStorage.removeItem('libraryUser')
        client.resetStore()
        updateToken(null)
    }

    return (
        <Nav>
            <NavContainer>
                <Menu>
                    <Link to="/" className={ location.pathname === '/' ? 'active' : '' }>home</Link>
                    <Link to="/authors" className={ location.pathname === '/authors' ? 'active' : '' }>authors</Link>
                    <Link to="/books" className={ location.pathname === '/books' ? 'active' : '' }>books</Link>
                    <Link to="/users" className={ location.pathname === '/users' ? 'active' : '' }>users</Link>
                    <Link to="/add_book" className={ location.pathname === '/add_book' ? 'active' : '' }>add book</Link>
                </Menu>
                <UserPanel>
                    {
                        loading && !error ? <span>loading...</span> : <span>Welcome, { data && data.me ? data.me.username : '' }!</span>
                    }
                    <OutlinedButton onClick={ handleLogout }>logout</OutlinedButton>
                </UserPanel>
            </NavContainer>
        </Nav>
    )
}

export default Navbar