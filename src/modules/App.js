/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Counter from 'modules/Counter';
import HomePage from 'modules/HomePage';
import NotFoundPage from 'modules/NotFoundPage';

import 'styles/main.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/counter" component={Counter} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
};

export default hot(module)(App);
