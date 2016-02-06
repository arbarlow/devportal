import expect from 'expect'
import {defaultState, AuthReducer } from '../src/js/reducers/authentication.js'

describe('auth reducer', () => {

  it('should return the initial state', () => {
    expect(
      AuthReducer(undefined, {})
    ).toEqual(defaultState)
  })

})
