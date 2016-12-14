import { combineReducers } from 'redux';
import paginationCounter from './PaginationCounter';
import storeList from './ReducerList';

const reducerApp = combineReducers({
	storeList,
	paginationCounter
})

export default reducerApp;