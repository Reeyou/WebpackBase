import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import "./components/Button.scss"
import Route from './router'
import store from './state/store'

ReactDOM.render(
    <Provider store={store}>
        <Route />
    </Provider>,
    document.getElementById('root'),
)
