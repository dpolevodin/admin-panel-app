import { combineReducers } from 'redux'

import { ordersReducer as orders} from './orders'

export const reducers = combineReducers({
    orders
})