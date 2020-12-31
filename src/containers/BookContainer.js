import React, {useState,useEffect} from 'react';
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import BookList from '../views/BookViews/BookList'
import Book from '../views/BookViews/Book'
import Alt from '../views/BookViews/Alt'


export default function BookContainer () {
    const [books, setBooks] = useState()
    let history = useHistory();
    let { path } = useRouteMatch();

    useEffect (() => {
        const retrieveBooks = async () => {
            try {
                const response = await fetch("http://localhost:3000/books");
                const data = await response.json();
                if (data) {
                    setBooks(data);
                }
            } catch (err) {
                alert(err);
            }
          };
        retrieveBooks()
        // eslint-disable-next-line
    },[])

    const convertBookToAlt = async (bookId, referenceBookId) => {
        const configObj = {
            method: "PATCH",
            headers: {
              accepts: "application/json",
              "content-type": "application/json",
            }
          };
        try {
            const response = await fetch(`http://localhost:3000/books/${bookId}/convert_to_alt/${referenceBookId}`, configObj);
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
            const response = await fetch(`http://localhost:3000/alts/${altId}/convert_to_book`, configObj);
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
        <> 
        { books ? 
            <Switch>
                <Route exact path={path}>
                    <BookList books={books} />
                </Route>
                <Route exact path={`${path}/:bookId`}>
                    <Book books={books} convertBookToAlt={convertBookToAlt}/>
                </Route>
                <Route path={`${path}/:bookId/alts/:altId`}>
                    <Alt books={books} convertAltToBook={convertAltToBook}/>
                </Route>
            </Switch>
        :
            <h3>Loading</h3>
        }
        </>
    )
}

