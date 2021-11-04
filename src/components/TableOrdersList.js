import JsonData from '../Data/Orders.json'
import SvgElement from '../components/SvgElement';
import Checkbox from '../components/Checkbox'


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
            <li className="table__body-item" key={order.id}>
                            <label className="table__checkbox-control">
                            <ul className="table__body-item-row">
                                <li className="table__header-item">
                                    <Checkbox />
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">{order.id}</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">{order.creationDate}</span>
                                </li>
                                <li className={statusClassMapping[order.status]}>
                                    <SvgElement svgName={statusIconMapping[order.status]} />
                                    <span className="table__header-item-text">{order.status}</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">{order.positionsCount}</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">{order.sum}</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">{order.name}</span>
                                </li>
                            </ul>
                            </label>
                        </li>
        )
    })

    return (
        <ul className="table__body-list">
            {ordersRender}
        </ul>
    )
}

export default TableOrdersList;