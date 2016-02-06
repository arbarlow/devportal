import React from 'react'
import App from '../components/App.js'
import { connect } from 'react-redux'
import styles from '../../css/app_info.css'
import { requestApp } from '../actions/apps.js'

let AppInfo = ({app}) => (
  <ul className={styles.appInfo}>
    {app.users.map(user =>
      <li key={user.id}>{user.name}</li>
    )}
  </ul>
)

export default AppInfo
