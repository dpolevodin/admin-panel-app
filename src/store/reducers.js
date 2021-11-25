import { combineReducers } from 'redux'

import { ordersReducer as orders} from './orders'
import { checkedOrdersReducer as checkedOrders} from './groupActions'
import { formReducer as form} from './modalForm'

export const reducers = combineReducers({
    orders,
    form,
    checkedOrders
})