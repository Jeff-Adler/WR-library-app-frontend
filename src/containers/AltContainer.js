import React, {useState,useEffect} from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
// import BookList from '../views/BookViews/BookList'
import Alt from '../views/BookViews/Alt'

export default function BookContainer () {
    const [alts, setAlts] = useState()

    let { path } = useRouteMatch();

    useEffect (() => {
        const retrieveAlts = () => {
            return fetch("http://localhost:3000/alts")
              .then((response) => response.json())
              .then((data) => {
                if (data) {
                  setAlts(data)
                }
              })
              .catch(err => {
                alert(err)
              });
          };
        retrieveAlts()
        // eslint-disable-next-line
    },[])

    return (
        <> 
        { alts ? 
            <Switch>
                {/* <Route exact path={path}>
                    <BookList alts={alts} />
                </Route> */}
                <Route path={`${path}/:altId`}>
                    <Alt alts={alts}/>
                </Route>
            </Switch>
        :
            <h3>Loading</h3>
        }
        </>
    )
}