import React from 'react'
import styles from '../../css/apps.css'

let App = ({app, expandAction}) => (
  <li className={styles.app} onClick={()=>{expandAction(app.id)}}>
    <img src={app.logo + `?${app.id}`}></img>
    <h3>{app.name}</h3>
    <p>{new Date(app.created).toLocaleString()}</p>
  </li>
)

export default App
