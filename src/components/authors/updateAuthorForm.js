import React, { useState } from 'react'
import { InputGroup, Input, Button } from '../../styles/layout'
import { useField } from '../utils/hooks'
import { useMutation } from '@apollo/client'
import { UPDATE_AUTHOR } from '../../services/queries'
import Select from 'react-select'

const UpdateAuthorForm = ({ authors }) => {
    const [updateAuthor] = useMutation(UPDATE_AUTHOR, {
        onError: (error) => alert(error.graphQLErrors[0].message)
    })

    const [name, setName] = useState('')
    const setBornTo = useField('text')

    const handleSubmit = e => {
        e.preventDefault()
        console.table({
            name: name,
            setBornTo: setBornTo.value
        })
        if (isNaN(Number(setBornTo.value))) {
            alert('Invalid birth year')
            return
        }
        updateAuthor({
            variables: {
                name: name,
                setBornTo: Number(setBornTo.value)
            }
        })
        setBornTo.clear()
    }

    const options = authors.map(a => ({
        value: a.name,
        label: a.name
    }))

    const handleSelectChange = (selected) => {
        setName(selected.value)
        console.log('selected option', selected.value)
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h2>update birthdate</h2>
            <InputGroup>
                <label>name</label>
                <div style={{color: "purple"}} >
                    <Select id="name" options={options} onChange={ handleSelectChange } />
                </div>
            </InputGroup>
            <InputGroup>
                <label htmlFor="setBornTo">birth year</label>
                <Input id="setBornTo" {...setBornTo.form} />
            </InputGroup>
            <div>
                <Button type="submit">update birthdate</Button>
            </div>
        </form>
    )
}

export default UpdateAuthorForm