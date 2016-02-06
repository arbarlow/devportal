import { loginRequest } from '../lib/api.js'
import { requestApps } from './apps.js'

export const LOGIN_FORM_UPDATE = "LOGIN_FORM_UPDATE"
export function updateLoginForm(change) {
  return {
    type: LOGIN_FORM_UPDATE,
    change: change,
  }
}

export const LOGIN_REQUEST = "LOGIN_REQUEST"
function requestLogin() {
  return {
    type: LOGIN_REQUEST
  }
}


export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
function loginSuccess(authData) {
  return {
    type: LOGIN_SUCCESS,
    authData: authData,
  }
}

export const LOGIN_FAILURE = "LOGIN_FAILURE"
function loginFailure(authData) {
  return {
    type: LOGIN_FAILURE,
    error: authData.error,
  }
}

export const AUTH_FAILURE = "AUTH_FAILURE"
export function authFailure() {
  document.cookie = ""
  return {
    type: AUTH_FAILURE,
    error: "You token has expired :)",
  }
}

export function checkAuthToken(store){
  if(document.cookie != ""){
    store.dispatch(
      loginSuccess({accessToken: document.cookie})
    )
    store.dispatch(requestApps())
  }
}

// Async Actions
export function login(form = {}) {
  return function (dispatch) {
    dispatch(requestLogin())

    loginRequest(form, (response, json) => {
      if (response.status == 401) 
      {
        dispatch(loginFailure(json))
      } 
      else 
      {
        document.cookie = json.accessToken
        dispatch(loginSuccess(json))
        dispatch(requestApps())
      }
    })
  }
}
