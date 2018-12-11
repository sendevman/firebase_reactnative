/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

export const updateBluetoothIsOn = (params) => ({
  type: 'UPDATE_BLUETOOTH_IS_ON',
  payload: params
})

export const updateLocationIsOn = (params) => ({
  type: 'UPDATE_LOCATION_IS_ON',
  payload: params
})

export const setNetworkInfo = (params) => ({
  type: 'UPDATE_NETWORK_INFO',
  payload: params
})

export const setReplaceURL = (params) => ({
  type: 'UPDATE_REPLACE_URL',
  payload: params
})

export const setFirebaseID = (params) => ({
  type: 'GET_FIREBASE_ID',
  payload: params
})

export const selectTabBar = (params) => ({
  type: 'SELECT_TABBAR_ID',
  payload: params
})
