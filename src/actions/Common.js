/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

export const updateBluetoothIsOn = (params) => ({
  type: 'UPDATE_BLUETOOTH_IS_ON',
  payload: params
})

export const setNetworkInfo = (params) => ({
  type: 'UPDATE_NETWORK_INFO',
  payload: params
})
