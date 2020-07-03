import React from 'react'
import { Container, Foot } from '../styles/layout'

const Footer = () => {
    return (
        <Foot>
            <Container style={{ textAlign: 'center' }}>
                <i>&copy; { new Date().getFullYear() } - Library App</i>
            </Container>
        </Foot>
    )
}

export default Footer