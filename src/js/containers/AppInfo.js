import React from 'react'
import App from '../components/App.js'
import { connect } from 'react-redux'
import styles from '../../css/app_info.css'
import { requestApp } from '../actions/apps.js'

let AppInfo = ({app}) => {
  if (app.users != undefined) {
    return (
      <ul className={styles.appInfo}>
        {app.users.map(user => (
          <li key={user.id}>
            <img src={user.avatar}/>
            <p>{user.name}</p>
          </li>
         ))}
      </ul>
    )
  } else {
    return <span/>
  }
}

export default AppInfo
