/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

export const setVodInfo = (params) => ({
  type: 'UPDATE_VOD_INFO',
  payload: params
})

export const setFeaturedInfo = (params) => ({
  type: 'UPDATE_FEATURED_INFO',
  payload: params
})

export const setFullListInfo = (params) => ({
  type: 'UPDATE_FULL_LIST_INFO',
  payload: params
})
