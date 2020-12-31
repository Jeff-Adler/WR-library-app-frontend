import React from 'react';
import './App.css';
import { Route, withRouter, Switch } from "react-router-dom";
import NavBar from './views/NavBar'
import BookContainer from './containers/BookContainer'
import AuthorContainer from './containers/AuthorContainer'

function App() {

  return (
    <div>
      <NavBar/>
      <div className = "app">
        <Switch>
          <Route path="/books">
            <BookContainer />
          </Route>
          <Route path="/authors">
            <AuthorContainer />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default withRouter(App);
