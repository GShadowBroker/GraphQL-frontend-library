import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_STATS } from '../services/queries'

const Home = () => {
    const { loading, error, data } = useQuery(GET_STATS)

    if (error) return (
        <div className="error">
            <h1>Error</h1>
            <div>There was an error loading data from server.</div>
        </div>
    )
    return (
        <div className="home">
            <h1>Welcome to the Library!</h1>
            { loading ? 'loading...' : <div><strong>Books: </strong>{ data.bookCount }</div> }
            { loading ? 'loading...' : <div><strong>Authors: </strong>{ data.authorCount }</div> }
        </div>
    )
}

export default Home