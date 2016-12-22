import { combineReducers } from 'redux';
import paginationCounter from './PaginationCounter';
import storeList from './ReducerList';
import headerAuth from './Auth';
import basket from './Basket';

const reducerApp = combineReducers({
  headerAuth,
  storeList,
  paginationCounter,
  basket
})

export default reducerApp;