// CSS
import './css/main.css'

// JS
import 'babel-polyfill'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import authentication from './js/reducers/authentication.js'
import App from './js/containers/App'

const logger = createLogger()
const devPortalApp = combineReducers({
  authentication
})

let store = createStore(
  devPortalApp,
  applyMiddleware(
    thunk, // lets us dispatch() functions
    logger // sick middleware that logs actions
  )
)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
