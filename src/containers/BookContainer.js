import React, {useState,useEffect} from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import BookList from '../views/BookViews/BookList'
import Book from '../views/BookViews/Book'
import Alt from '../views/BookViews/Alt'


export default function BookContainer () {
    const [books, setBooks] = useState()

    let { path } = useRouteMatch();

    useEffect (() => {
        const retrieveBooks = () => {
            return fetch("http://localhost:3000/books")
              .then((response) => response.json())
              .then((data) => {
                if (data) {
                  setBooks(data)
                }
              })
              .catch(err => {
                alert(err)
              });
          };
        retrieveBooks()
        // eslint-disable-next-line
    },[])

    return (
        <> 
        { books ? 
            <Switch>
                <Route exact path={path}>
                    <BookList books={books} />
                </Route>
                <Route path={`${path}/:bookId`}>
                    <Book books={books}/>
                </Route>
                <Route path={`${path}/:bookId/alts/:altId`}>
                    <Alt books={books}/>
                </Route>
            </Switch>
        :
            <h3>Loading</h3>
        }
        </>
    )
}