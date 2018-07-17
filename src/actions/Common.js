/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

export const updateHeaderNav = (params) => ({
  type: 'UPDATE_HEADERNAV',
  payload: params
})

export const updateBluetoothIsOn = (params) => ({
  type: 'UPDATE_BLUETOOTH_IS_ON',
  payload: params
})
