import Checkbox from "../Common/Checkbox"
import SvgElement from "../Icons/SvgElement"

const OrderItem = ({
    id, 
    creationDate, 
    statusClass,
    iconClass,
    status,
    positionsCount,
    sum,
    name
}) => {
    return (
        <li className="table__body-item">
                <label className="table__checkbox-control">
                <ul className="table__body-item-row">
                    <li className="table__header-item">
                        <Checkbox />
                    </li>
                    <li className="table__header-item">
                        <span className="table__header-item-text">{id}</span>
                    </li>
                    <li className="table__header-item">
                        <span className="table__header-item-text">{creationDate}</span>
                    </li>
                    <li className={statusClass}>
                        <SvgElement svgName={iconClass} />
                        <span className="table__header-item-text">{status}</span>
                    </li>
                    <li className="table__header-item">
                        <span className="table__header-item-text">{positionsCount}</span>
                    </li>
                    <li className="table__header-item">
                        <span className="table__header-item-text">{sum}</span>
                    </li>
                    <li className="table__header-item">
                        <span className="table__header-item-text">{name}</span>
                    </li>
                </ul>
                </label>
            </li>
    )
}

export default OrderItem