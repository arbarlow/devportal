import { connect } from 'react-redux'
import React from 'react'
import Login from './Login.js'

let App = ({auth}) => {
  if (auth.loggedIn) {
    return <div/>
  } else {
    return <Login/>
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.authentication
  }
}

App = connect(mapStateToProps, {})(App)

export default App
