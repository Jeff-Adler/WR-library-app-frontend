import React, {useState,useEffect} from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import BookList from '../views/BookViews/BookList'
import Book from '../views/BookViews/Book'

export default function BookContainer () {
    const [books, setBooks] = useState()
    const [book, setBook] = useState()

    //imports path from parent component
    let { path } = useRouteMatch();

    useEffect (() => {
        retrieveBooks()
    },[])

    const retrieveBooks = () => {
        fetch("http://localhost:3000/books")
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              setBooks(data)
            }
          });
      };

    // retrieveBook = (bookId) => {
    // fetch(`http://localhost:3000/books/${bookId}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //     if (data) {
    //         setBook(data)
    //     }
    //     });
    // };

    // bookSelectHandler = async (bookId) => {
    //     await retrieveBook(bookId)

    // }

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
            </Switch>
        :
            <h3>Loading</h3>
        }
        </>
    )
}