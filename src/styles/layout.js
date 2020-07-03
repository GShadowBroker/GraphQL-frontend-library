import styled from 'styled-components'

export const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    flex: 1;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 1rem 2rem;
`

export const NavContainer = styled(Container)`
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    height: 80px;
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    height: 100%;

    a, a:visited {
        color: inherit;
        text-decoration: none;
        padding: .6em .6em;
        transition: background .2s linear;

        &:hover {
            background: #242450;
            box-shadow: 1px 1px 5px #141429;
        }
    }

    .active {
        color: yellow !important;
    }
`

export const UserPanel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    & > * {
        margin: 0 1em;
    }
`

export const Foot = styled.footer`
`

export const Table = styled.table`
    width: 100%;
    max-width: 500px;

    thead tr {
        height: 50px;
        color: yellow;
    }

    td {
        padding: 0 10px;
        height: 50px;
    }
`

// Form

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    padding: .2em 0;
    width: 300px;
    max-width: 100%;
`

export const Input = styled.input`
    height: 2.5em;
    font-size: inherit;
    font-weight: bold;
    font-family: inherit;
    color: purple;
`

export const Button = styled.button`
    cursor: pointer;
    border: none;
    background: purple;
    color: inherit;
    padding: .6em;
    border-radius: .2em;
    box-shadow: none;
    transition: box-shadow .2s linear;

    &:hover {
        box-shadow: 0 0 15px purple;
    }
`

export const OutlinedButton = styled(Button)`
    background: none;
    color: purple;
    border: .5px solid purple;
`

// Login

export const LoginCard = styled.div`
    background: #1c1c44;
    width: 300px;
    max-width: 100%;
    padding: 2rem;
    margin: auto;
    margin-top: 5rem;
    border-radius: .4rem;
    box-shadow: 1px 1px 4px #0e0e22;
`

