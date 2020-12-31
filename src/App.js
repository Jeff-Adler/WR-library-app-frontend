import React from 'react';
import './App.css';
import { Route, withRouter, Switch } from "react-router-dom";
import Home from './views/Home.js'
import BookContainer from './containers/BookContainer'
import AuthorContainer from './containers/AuthorContainer'

// import AltContainer from './containers/AltContainer'

function App() {
  return (
    <div className="App">
      <header>
        <h1>LibHelp</h1>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/books">
          <BookContainer />
        </Route>
        {/* <Route path="/alts">
          <AltContainer />
        </Route> */}
        <Route path="/authors">
          <AuthorContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
