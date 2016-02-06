import { appsRequest, appRequest } from '../lib/api.js'
import { authFailure } from './authentication.js'

export const APPS_REQUEST = "APPS_REQUEST"
function requestAppsAction() {
  return {
    type: APPS_REQUEST
  }
}

export const APPS_SUCCESS = "APPS_SUCCESS"
function appsSuccess(appData) {
  return {
    type: APPS_SUCCESS,
    appData: appData,
  }
}

export const APP_REQUEST = "APP_REQUEST"
function requestAppAction(app_id) {
  return {
    type: APP_REQUEST,
    appID: app_id
  }
}

export const APP_SUCCESS = "APP_SUCCESS"
function appSuccess(id, appData) {
  return {
    type: APP_SUCCESS,
    appID: id,
    appData: appData,
  }
}

// Async Actions
export function requestApps() {
  return function (dispatch) {
    dispatch(requestAppsAction())

    appsRequest((response, json) => {
      if (response.status == 401) 
      {
        dispatch(authFailure())
      } 
      else 
      {
        dispatch(appsSuccess(json))
      }
    })
  }
}

export function requestApp(app_id) {
  return function (dispatch) {
    dispatch(requestAppAction(app_id))

    appRequest(app_id, (response, json) => {
      if (response.status == 401) 
      {
        dispatch(authFailure())
      } 
      else 
      {
        dispatch(appSuccess(app_id, json))
      }
    })
  }
}
