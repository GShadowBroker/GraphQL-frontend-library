import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { Wrapper, Container } from './styles/layout'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Authors from './components/authors/Authors'
import Users from './components/users/Users'
import Books from './components/books/Books'
import AddBook from './components/add_book/AddBook'
import Login from './components/Login'

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const savedToken = JSON.parse(window.localStorage.getItem('libraryUser'))
    if (savedToken) {
      setToken(savedToken.value)
    }
  }, [])

  const updateToken = (newToken) => {
    setToken(newToken)
  }

  if (!token) return (
    <Wrapper>
      <Container>
        <Login updateToken={ updateToken } />
      </Container>
      <Footer />
    </Wrapper>
  )

  return (
    <Wrapper>
      <Navbar updateToken={ updateToken } />
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/authors">
              <Authors />
            </Route>
            <Route exact path="/books">
              <Books />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route exact path="/add_book">
              <AddBook />
            </Route>
          </Switch>
        </Container>
      <Footer />
    </Wrapper>
  );
}

export default App;
