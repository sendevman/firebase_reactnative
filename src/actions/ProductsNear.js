/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

export const setProductsNearInfo = (params) => ({
  type: 'UPDATE_PRODUCTS_NEAR_INFO',
  payload: params
})
export const setProductsAllInfo = (params) => ({
  type: 'STORE_PRODUCTS_ALL_INFO',
  payload: params
})
