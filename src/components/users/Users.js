import React, { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { GET_USERS, SEND_FRIEND_REQUEST } from '../../services/queries'
import { Button } from '../../styles/layout'

const Users = () => {
    const { error, loading, data, refetch } = useQuery(GET_USERS, {
    })
    const [ sendFriendRequest ] = useMutation(SEND_FRIEND_REQUEST, {
        onError: error => alert(error.graphQLErrors[0].message)
    })
    const [user, setUser] = useState(null)

    useEffect(() => {
        const newUser = JSON.parse(window.localStorage.getItem('libraryUser'))
        if (newUser) {
            setUser(newUser)
        }
    }, [])

    const addFriend = (id) => {
        console.log('adding id', id)
        sendFriendRequest({
            variables: { id },
            refetchQueries: [{
                query: GET_USERS
            }]
        })
    }

    if (error) return (
        <div className="error">
            <h1>Error</h1>
            <div>There was an error loading data from server.</div>
        </div>
    )

    return (
        <div className="users">
            <h1>Users</h1>
            { loading
                ? 'loading...'
                : <ul>
                    { data.allUsers.map(u =>
                        <li key={ u.id }>
                            { u.username }
                            {
                                user && !u.friends.find(f => f.id.toString() === user.id)
                                    ? !u.friend_requests.find(f => f.id.toString() === user.id)
                                        ? <Button onClick={ () => addFriend(u.id) }>+ friend</Button>
                                        : <i>request sent</i>
                                    : <i>already your friend</i>
                            }
                        </li>
                    ) }
                </ul>
            }
        <Button onClick={ () => refetch() }>Refetch</Button>
        </div>
    )
}

export default Users