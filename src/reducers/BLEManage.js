import _ from 'lodash'

let initialState = {
    sections : []
}

export default (state = initialState, action) => {
    let newState = _.merge({}, state)
    switch (action.type) {
        case 'UPDATE_LOCATION':
            return {
                locationData: _.merge(state.locationData, action.payload)
            }
        break;
        case 'UPDATE_WALKBASE':
            return {
                ...state,
                bleData: _.merge(state.bleData, action.payload)
            }
        break;
        default:
        return newState;
    }
}