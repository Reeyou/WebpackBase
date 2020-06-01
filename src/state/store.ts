import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import ThunkMiddleware from 'redux-thunk'
import Reducer from './reducer'

const logger = createLogger({
    collapsed: true
})

const store = createStore(Reducer, applyMiddleware(
    logger,
    ThunkMiddleware
))

export default store