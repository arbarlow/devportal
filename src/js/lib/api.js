import fetch from 'isomorphic-fetch'

function newRequest(path, method, params={}, callback){
  let headers = new Headers({
    "Content-Type": "application/json",
    "Authorization": document.cookie
  })

  let loginRequest = new Request(
    `//guarded-thicket-22918.herokuapp.com/${path}`, 
    {
      method: method,
      headers: headers,
      body: params ? JSON.stringify(params) : null
    }
  )

  fetch(loginRequest)
  .then(response => {
    response.json().then(function(json) {
      callback(response, json)
    });
  })
}

export function loginRequest(creds, callback) {
  newRequest("login", "POST", creds, callback)
}

export function appsRequest(callback) {
  newRequest("apps", "GET", null, callback)
}


export function appRequest(id, callback) {
  newRequest(`apps/${id}/users`, "GET", null, callback)
}
