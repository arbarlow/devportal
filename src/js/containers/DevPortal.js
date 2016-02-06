import { connect } from 'react-redux'
import React from 'react'
import AppList from './AppList.js'
import Login from './Login.js'

let DevPortal = ({auth, app}) => {
  if (auth.loggedIn) {
    return <AppList/>
  } else {
    return <Login/>
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.authentication,
    app: state.apps.currentApp
  }
}

DevPortal = connect(mapStateToProps, {})(DevPortal)

export default DevPortal

