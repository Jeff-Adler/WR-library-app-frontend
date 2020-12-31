import React, {useState,useEffect} from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AuthorList from '../views/AuthorViews/AuthorList'
import Author from '../views/AuthorViews/Author'

export default function AuthorContainer () {
    const [authors, setAuthors] = useState()

    let { path } = useRouteMatch();

    useEffect (() => {
        const retrieveAuthors = () => {
            return fetch("http://localhost:3000/authors")
              .then((response) => response.json())
              .then((data) => {
                if (data) {
                  setAuthors(data)
                }
              })
              .catch(err => {
                alert(err)
              });
          };
        retrieveAuthors()
        // eslint-disable-next-line
    },[])

    return (
        <> 
        { authors ? 
            <Switch>
                <Route exact path={path}>
                    <AuthorList authors={authors} />
                </Route>
                <Route path={`${path}/:authorId`}>
                    <Author authors={authors}/>
                </Route>
            </Switch>
        :
            <div className="loading-screen">
                <h3>Loading</h3>
            </div>
        }
        </>
    )
}