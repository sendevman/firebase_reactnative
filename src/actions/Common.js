/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

export const updateHeaderNav = (newValue) => {
  return { type: 'UPDATE_HEADERNAV', newValue }
}

export const updateBluetoothIsOn = (params) => ({
  type: 'UPDATE_BLUETOOTH_IS_ON',
  payload: params
})
