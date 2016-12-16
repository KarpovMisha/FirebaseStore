import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Home, TestComp } from 'containers';

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='test' component={TestComp} />
  </Route>
)
