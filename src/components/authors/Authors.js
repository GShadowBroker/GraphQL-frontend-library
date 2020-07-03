import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_AUTHORS } from '../../services/queries'
import { Table } from '../../styles/layout'
import UpdateAuthorForm from './updateAuthorForm'

const Authors = () => {
    const { error, loading, data } = useQuery(GET_AUTHORS)

    if (error) return (
        <div className="error">
            <h1>Error</h1>
            <div>There was an error loading data from server.</div>
        </div>
    )

    return (
        <div className="authors">
            { loading ? 'loading...' : (
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <td>author</td>
                                <td>born</td>
                                <td>books</td>
                            </tr>
                        </thead>
                        <tbody>
                            { data.allAuthors.map(a =>
                                <tr key={ a.id }>
                                    <td>{ a.name }</td>
                                    <td>{ a.born }</td>
                                    <td>{ a.books.length }</td>
                                </tr>
                            ) }
                        </tbody>
                    </Table>
                    <UpdateAuthorForm authors={ data.allAuthors } />
                </div>
                
                )
            }
        </div>
    )
}

export default Authors