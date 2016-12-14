import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'containers/Home/Home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { promiseMiddleware } from './middleware';
import reducerApp from './reducers/index';

export const store = createStore(reducerApp, applyMiddleware(promiseMiddleware));

// store.subscribe(() => {
//   console.log('store', store.getState());
// })

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.querySelector('.container')
);

if (module.hot) {
  module.hot.accept();
}