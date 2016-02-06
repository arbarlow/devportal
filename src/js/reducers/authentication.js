import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_FORM_UPDATE
} from '../actions/authentication.js'

export const defaultState = {
  loggedIn: false,
  isRequestingLogin: false,
  accessToken: null
}

export function AuthReducer(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_FORM_UPDATE:
      let loginForm = Object.assign({}, state.loginForm, action.change)
      return Object.assign({}, state, { loginForm })
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isRequestingLogin: true
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loggedIn: true,
        isRequestingLogin: false,
        accessToken: action.authData.accessToken,
        error: null
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isRequestingLogin: false,
        loggedIn: false,
        error: action.error
      })
    default:
      return state
  }
}

export default AuthReducer
