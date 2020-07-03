import React, { useState } from 'react'
import { useField } from '../utils/hooks'
import { Input, InputGroup, Button } from '../../styles/layout'
import { CREATE_BOOK } from '../../services/queries'
import { useMutation } from '@apollo/client'

const AddBook = () => {
    const [createBook] = useMutation(CREATE_BOOK, {
        onError: (error) => alert(error.graphQLErrors[0].message)
    })

    const title = useField('text')
    const author = useField('text')
    const published = useField('')
    const genre = useField('text')
    const [genreArray, setGenreArray] = useState([])
    
    const handleSubmit = e => {
        e.preventDefault()

        console.table({
            title: title.value,
            author: author.value,
            published: Number(published.value),
            genres: genreArray
        })

        if (isNaN(Number(published.value))) {
            alert('Published value must be a whole number')
            return
        }

        createBook({
            variables: {
                title: title.value,
                author: author.value,
                published: Number(published.value),
                genres: genreArray
            }
        })

        title.clear()
        author.clear()
        published.clear()
    }

    const handleGenre = e => {
        if (e.key === ';') {
            console.log('sent')
            setGenreArray([...genreArray, (genre.value).substring(0, genre.value.length - 1).toUpperCase()])
            genre.clear()
        }
    }

    const resetGenres = (e) => {
        e.preventDefault()
        setGenreArray([])
    }

    return (
        <div className="add-book">
            <h1>Add Book</h1>
            <form onSubmit={ handleSubmit }>
                <InputGroup>
                    <label htmlFor="title">title</label>
                    <Input id='title'{ ...title.form }/>
                </InputGroup>
                <InputGroup>
                    <label htmlFor="author">author</label>
                    <Input id='author'{ ...author.form }/>
                </InputGroup>
                <InputGroup>
                    <label htmlFor="published">published</label>
                    <Input id='published'{ ...published.form }/>
                </InputGroup>
                <InputGroup>
                    <label htmlFor="genres">genres</label>
                    <Input { ...genre.form } onKeyUp={ handleGenre } />
                    <p>genres: { genreArray.map((g, i) =>
                            <span key={ i }>{ g }; </span>
                        ) }
                        <Button onClick={ resetGenres }>reset</Button>
                    </p>
                </InputGroup>
                <div>
                    <Button type="submit">add book</Button>
                </div>
            </form>
        </div>
    )
}

export default AddBook