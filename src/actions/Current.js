/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

export const setLocationData = (params) => ({
  type: 'UPDATE_LOCATION',
  payload: params
})

export const setProductInfo = (params) => ({
  type: 'UPDATE_PRODUCT_INFO',
  payload: params
})

export const setAreaInfo = (params) => ({
  type: 'UPDATE_AREA_INFO',
  payload: params
})

export const setWifiData = (params) => ({
  type: 'UPDATE_WIFI',
  payload: params
})

export const setCompareInfo = (params) => ({
  type: 'UPDATE_COMPARE_INFO',
  payload: params
})
