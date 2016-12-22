import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Home, TestComp, BasketList } from 'containers';

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path="/store/:id" component={Home} />
    <Route path="basket" component={BasketList} />
  </Route>
)
