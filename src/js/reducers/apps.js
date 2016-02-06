import {
  APPS_REQUEST, APPS_SUCCESS, APP_REQUEST,APP_SUCCESS
} from '../actions/apps.js'
import deepcopy from 'deepcopy'

export const defaultState = {
  items: [],
  currentApp: {users:[]},
  isFetching: true
}

function findAppWithID(state, id){
  return deepcopy(state).items.find(app => (app.id === id))
}

function appendUsersToApp(state, action) {
  let copyState = deepcopy(state)
  copyState.items.forEach(app => {
    if (app.id === action.appID) {
      app["users"] = action.appData.users
    }
  })
  return copyState
}

export function AppReducer(state = defaultState, action) {
  switch (action.type) {
    case APPS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case APPS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.appData.apps
      })
    case APP_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case APP_SUCCESS:
      let app = findAppWithID(state, action.appID)
      app["users"] = action.appData.users
      return Object.assign({}, state, appendUsersToApp(state, action), {
        isFetching: false,
        currentApp: app
      })
    default:
      return state
  }
}

export default AppReducer
