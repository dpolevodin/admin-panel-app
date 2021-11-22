import { ordersActionTypes } from './actions'
import MockList from '../../data/Orders.json'

const initialState = {
    orders: 'Хранилище заказов пустое',
}

export const ordersReducer = (
    state = initialState,
    action
) => {
    switch(action.type) {
        case ordersActionTypes.SET_ORDERS:
            return {...state, profile: action.payload}
        default: 
            return state
    }
}