import JsonData from '../Data/Orders.json'
import OrderItem from '../components/OrderItem'

function TableOrdersList () {

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

    const ordersRender = JsonData.map(order => {
        return (
            <OrderItem
                id={order.id}
                creationDate={order.creationDate}
                statusClass={statusClassMapping[order.status]}
                iconClass={statusIconMapping[order.status]}
                status={order.status}
                positionsCount={order.positionsCount}
                sum={order.sum}
                name={order.name}
                key={order.id}
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