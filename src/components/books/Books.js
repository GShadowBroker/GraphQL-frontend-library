import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_BOOKS } from '../../services/queries'
import { Table } from '../../styles/layout'

const Books = () => {
    const { error, loading, data } = useQuery(GET_BOOKS)

    if (error) return (
        <div className="error">
            <h1>Error</h1>
            <div>There was an error loading data from server.</div>
        </div>
    )

    return (
        <div className="books">
            <h1>Books</h1>
            { loading ? 'loading...' : (
                <Table>
                    <thead>
                        <tr>
                            <td>title</td>
                            <td>author</td>
                            <td>published</td>
                        </tr>
                    </thead>
                    <tbody>
                        { data.allBooks.map(book =>
                            <tr key={ book.id }>
                                <td>{ book.title }</td>
                                <td>{ book.author.name }</td>
                                <td>{ book.published }</td>
                            </tr>
                        ) }
                    </tbody>
                </Table>
            ) }
        </div>
    )
}

export default Books