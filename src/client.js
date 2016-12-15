import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'containers/Home/Home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { promiseMiddleware } from './middleware';
import reducerApp from './reducers/index';
import { Router, browserHistory } from 'react-router';
import { routes } from './routes';

export const store = createStore(reducerApp, applyMiddleware(promiseMiddleware));


ReactDOM.render(
  <Provider store={store}>
    <Router  history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('.container')
);

if (module.hot) {
  module.hot.accept();
}