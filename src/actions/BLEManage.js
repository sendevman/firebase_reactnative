/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

 /**
  * Save Location Data to Redux Store
  */

 export const setLocationInfo = (params) => ({
    type: 'UPDATE_LOCATION',
    payload: params
})
export const setBLEInfo = (params) => ({
    type: 'UPDATE_WALKBASE',
    payload: params
})

export function saveLocationInfo(params){
    return async function(dispatch, getState) {
        return dispatch({
            type: 'UPDATE_LOCATION',
            payload: params
        })
    }
}
export function saveBLEInfo(params){
   return async function(dispatch, getState) {
       return dispatch({
           type: 'UPDATE_WALKBASE',
           payload: params
       })
   }
}