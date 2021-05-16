import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Dashboard, Item} from './pages';
import {Header, Footer} from "./components";
import {ErrorPage} from './pages'

import './App.css';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={Dashboard}
        />
        <Route
          path="/dashboard"
          component={Dashboard}
        />
        <Route
          path="/item"
          component={Item}
        />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
