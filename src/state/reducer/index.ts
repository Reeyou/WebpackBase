
import { combineReducers } from 'redux'
import {todos, visibilityFilter} from './todo'

const Reducer = combineReducers({
  todos,
  visibilityFilter
})

export default Reducer

