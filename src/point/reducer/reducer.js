import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import task from './task'
import filter from './filter'


const reducer = combineReducers({ routing: routerReducer, filter, task})

export default reducer;
