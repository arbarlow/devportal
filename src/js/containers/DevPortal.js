import { connect } from 'react-redux'
import React from 'react'
import AppList from './AppList.js'
import AppInfo from './AppInfo.js'
import Login from './Login.js'

let DevPortal = ({auth, app}) => {
  if (auth.loggedIn) {
    return (
      <div>
        <div>
          <AppList/>
        </div>
        <div>
          <AppInfo app={app}/>
        </div>
      </div>
    )
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

