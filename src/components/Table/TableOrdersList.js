import MockList from '../../data/Orders.json'
import OrderItem from '../Table/OrderItem'

const statusIconMapping = {
    'Новый': 'dot',
    'Расчет': 'dot',
    'Выполнен': 'checkmark',
    'Отменен': 'abort',
    'Отложен': 'dot',
}

const statusClassMapping = {
    'Новый': 'table__header-item',
    'Расчет': 'table__header-item table__header-item_blue',
    'Выполнен': 'table__header-item table__header-item_green',
    'Отменен': 'table__header-item table__header-item_half-transparent',
    'Отложен': 'table__header-item',
}

const TableOrdersList = ({
    orders = MockList
}) => {

    const ordersRender = orders.map(order => {
        return (
            <OrderItem 
                {...order}
                statusClass={statusClassMapping[order.status]}
                iconClass={statusIconMapping[order.status]}
                key = {order.id}
            />
        )        
    })

    return (
        <div className="table__body">
            <ul className="table__body-list">
                {ordersRender}
            </ul>
        </div>
    )
}

export default TableOrdersList;