import React from 'react'
import styles from '../../css/apps.css'
import AppInfo from '../containers/AppInfo.js'

let App = ({app, expandAction}) => (
  <div className={styles.app} onClick={()=>{expandAction(app.id)}}>
    <img src={app.logo + `?${app.id}`}></img>
    <h3>{app.name}</h3>
    <p>{new Date(app.created).toLocaleString()}</p>
    <AppInfo app={app}/>
  </div>
)

export default App
