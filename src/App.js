import React, {useState, useEffect} from 'react';
import './App.css';
import { Route, withRouter, Switch, Redirect, useHistory  } from "react-router-dom";
import NavBar from './views/NavBar'
import BookList from './views/BookViews/BookList'
import Book from './views/BookViews/Book'
import Alt from './views/BookViews/Alt'

// import AuthorContainer from './containers/AuthorContainer'
import AuthorList from './views/AuthorViews/AuthorList'
import Author from './views/AuthorViews/Author'

function App() {
  let history = useHistory();

  const [books, setBooks] = useState()
  const [authors, setAuthors] = useState()

  useEffect (() => {
    async function fetchBooksAndAuthors() {
      await retrieveBooks()
      await retrieveAuthors()
    }
    fetchBooksAndAuthors()
    // eslint-disable-next-line
},[])

  const retrieveBooks = async () => {
    try {
        const response = await fetch("https://wr-library-app-backend.herokuapp.com/books");
        const data = await response.json();
        if (data) {
          setBooks(data)
        }
    } catch (err) {
        alert(err);
    }
  };

  const retrieveAuthors = async () => {
    try {
        const response = await fetch("https://wr-library-app-backend.herokuapp.com/authors");
        const data = await response.json();
        if (data) {
          setAuthors(data)
        }
    } catch (err) {
        alert(err);
    }
  };

  const convertBookToAlt = async (bookId, referenceBookId) => {
    const configObj = {
        method: "PATCH",
        headers: {
          accepts: "application/json",
          "content-type": "application/json",
        }
      };
    try {
        const response = await fetch(`https://wr-library-app-backend.herokuapp.com/books/${bookId}/convert_to_alt/${referenceBookId}`, configObj);
        const data = await response.json();
        if (data) {
            alert("Successfully labeled book as duplicate of reference!")
            setBooks(data);
            history.push('/books')
        }
    } catch (err) {
        alert(err);
    }
  }

  const convertAltToBook = async (altId) => {
      const configObj = {
          method: "PATCH",
          headers: {
            accepts: "application/json",
            "content-type": "application/json",
          }
        };
      try {
          const response = await fetch(`https://wr-library-app-backend.herokuapp.com/alts/${altId}/convert_to_book`, configObj);
          const data = await response.json();
          if (data) {
              alert("Successfully labeled duplicate as reference!")
              setBooks(data);
              history.push('/books')
          }
      } catch (err) {
          alert(err);
      }
  }

  return (
    <div>
      <NavBar/>
      {books && authors
      ?
        <div className = "app">
            <Switch>
                <Route exact path="/">
                  <Redirect to="/books" />
                </Route>
                <Route exact path="/books">
                    <BookList books={books} />
                </Route>
                <Route exact path="/books/:bookId">
                    <Book books={books} convertBookToAlt={convertBookToAlt}/>
                </Route>
                <Route exact path="/books/:bookId/alts/:altId">
                    <Alt books={books} convertAltToBook={convertAltToBook}/>
                </Route>
                <Route exact path="/authors">
                    <AuthorList authors={authors} />
                </Route>
                <Route exact path="/authors/:authorId">
                    <Author authors={authors}/>
                </Route>
            </Switch>
        </div>
      :
        <div className="loading-screen">
          <h3>Loading</h3>
        </div>
      }
    </div>
  )
}

export default withRouter(App);
