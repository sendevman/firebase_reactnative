/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

  export const setLocationAllInfo = (params) => ({
    type: 'STORE_LOCATION_ALL_INFO',
    payload: params
  })

  export const setLocationSelectItem = (params) => ({
    type: 'STORE_LOCATION_ITEM',
    payload: params
  })
  