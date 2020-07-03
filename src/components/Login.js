import React, { useEffect } from 'react'
import { LoginCard, InputGroup, Input, Button } from '../styles/layout'
import { useField } from './utils/hooks'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../services/queries'

const Login = ({ updateToken }) => {
    const username = useField('text')
    const password = useField('password')
    const [login, result] = useMutation(LOGIN, {
        onError: (error) => alert(error.graphQLErrors[0].message)
    })

    useEffect(() => {
        if (result.data) {
            const token = result.data.login.value
            updateToken(token)
            window.localStorage.setItem('libraryUser', JSON.stringify(result.data.login))
        }
    }, [result.data, updateToken])

    const handleLogin = (e) => {
        e.preventDefault()
        console.table({
            username: username.value,
            password: password.value
        })
        login({
            variables: {
                username: username.value,
                password: password.value
            }
        })
    }

    return (
        <LoginCard>
            <h2>Login to library</h2>
            <form onSubmit={ handleLogin }>
                <InputGroup>
                    <label htmlFor="username">username</label>
                    <Input {...username.form} required />
                </InputGroup>
                <InputGroup>
                    <label htmlFor="username">password</label>
                    <Input {...password.form} required />
                </InputGroup>
                <InputGroup style={{ marginTop: '2em' }}>
                    <Button type="submit">login</Button>
                </InputGroup>
            </form>
        </LoginCard>
    )
}

export default Login