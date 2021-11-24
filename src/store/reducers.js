import { combineReducers } from 'redux'

import { ordersReducer as orders} from './orders'
import { formReducer as form} from './modalForm'

export const reducers = combineReducers({
    orders,
    form,
})