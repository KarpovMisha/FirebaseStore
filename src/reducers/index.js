import { combineReducers } from 'redux';
import paginationCounter from './PaginationCounter';
import storeList from './ReducerList';
import headerAuth from './Auth';

const reducerApp = combineReducers({
  headerAuth,
  storeList,
  paginationCounter
})

export default reducerApp;