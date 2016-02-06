import fetch from 'isomorphic-fetch'

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

// Async Actions
export function login(form = {}) {
  return function (dispatch) {

    dispatch(requestLogin())

    let headers = new Headers({
      "Content-Type": "application/json",
    })

    let loginRequest = new Request(
      '//guarded-thicket-22918.herokuapp.com/login', 
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(form)
      }
    )

    return fetch(loginRequest)
    .then(response => {
      response.json().then(function(json) {
        if (response.status == 401) 
          {
            dispatch(loginFailure(json))
          } 
          else 
          {
            dispatch(loginSuccess(json))
          }
      });
    })
  }
}
