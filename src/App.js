import React from 'react';
import './App.css';
import { Route, withRouter, Switch } from "react-router-dom";
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom';
// import Home from './views/Home.js'
import BookContainer from './containers/BookContainer'
import AuthorContainer from './containers/AuthorContainer'

function App() {

  return (
    <div>
      <header>
        <h1>LibHelp</h1>
        <Link to="/books">
            <Button color="secondary">Books</Button>{' '}
        </Link>
        {`\xa0\xa0\xa0\xa0\xa0\xa0\xa0`}
        <Link to="/authors">
            <Button color="secondary">Authors</Button>{' '}
        </Link>
      </header>
      <div className = "App">
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

  // return (
  //   <div className="App">
  //     <header>
  //       <h1>LibHelp</h1>
  //     </header>
      // <Switch>
      //   <Route exact path="/">
      //     <Home />
      //   </Route>
      //   <Route path="/books">
      //     <BookContainer />
      //   </Route>
      //   {/* <Route path="/alts">
      //     <AltContainer />
      //   </Route> */}
      //   <Route path="/authors">
      //     <AuthorContainer />
      //   </Route>
      // </Switch>
  //   </div>
  // );
}

export default withRouter(App);
