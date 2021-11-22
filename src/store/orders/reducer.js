import { ordersActionTypes } from './actions'

const initialState = {
    orders: null
}

export const ordersReducer = (
    state = initialState,
    action
) => {
    switch(action.type) {
        case ordersActionTypes.SET_ORDERS:
            return {...state, orders: action.payload}
        default: 
            return state
    }
}