import React from 'react'
import App from '../components/App.js'
import { connect } from 'react-redux'
import styles from '../../css/apps.css'
import { requestApp } from '../actions/apps.js'

const mapStateToProps = (state) => {
  return {
    apps: state.apps.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    expandAction: (app_id) => { dispatch(requestApp(app_id))}
  }
}

let AppList = ({apps, expandAction}) => (
  <ul className={styles.apps}>
    {apps.map(app =>
      <App
        key={app.id}
        app={app}
        expandAction={expandAction}
      />
    )}
  </ul>
)

AppList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppList)

export default AppList
