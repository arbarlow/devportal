import styles from '../../css/login.css'

import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm, login } from '../actions/authentication.js'

const mapStateToProps = (state) => {
  return {
    authState: state.authentication
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    formChange: (event) => {
      event.preventDefault()
      let change = {}
      change[event.target.name] = event.target.value
      dispatch(updateLoginForm(change))
    },
    submit: (event, form) => {
      event.preventDefault()
      dispatch(login(form))
    }
  }
}

let Login = ({authState, formChange, submit}) => {
  let error
  if(authState.error){
    error = <div className={styles.errors}><p>{authState.error}</p></div>
  }

  return (
    <div className={styles.loginForm}>
      <img src={require('../../img/logo.svg')}/>
      <form onSubmit={(e)=> { submit(e, authState.loginForm) }}>
        {error}
        <div>
          <input type="text" name="email" placeholder="joe@example.com" onChange={formChange}/>
        </div>
        <div>
          <input type="password" name="password" placeholder="***" onChange={formChange}/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login)

export default Login
