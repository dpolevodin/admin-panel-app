import TableHeader from "./TableHeader";
import TableOrdersList from "./TableOrdersList";
import TableFooter from "./TableFooter";
import { useSelector, useDispatch } from "react-redux";
import { ordersActions } from "../../store/orders";
import { formActions } from "../../store/modalForm";
import { useState } from "react";


const mockOrder = {
  id: 1373265,
  creationDate: "2020-11-15T09:26:00.000Z",
  status: "Выполнен",
  positionsCount: 1,
  sum: 17008,
  name: "Иванов Иван Иванович",
  loyalty: "Мастер",
  confirmCode: "001",
}

const filtersMapping = {
  'Дата': 'creationDate',
  'Статус': 'status',
  'Позиций': 'positionsCount',
  'Сумма': 'sum',
}

const OrdersTable = () => {
  const [isSortedBySum, setIsSortedBySum] = useState(false)

  const { orders } = useSelector(state => state);  
  const ordersList = !!orders ? orders : [];

  const dispatch = useDispatch()

  const handleFilterSort = (event) => {
    const valueToSort = event.target.innerText
    dispatch(ordersActions.sortOrders({
      value: filtersMapping[valueToSort],
      SortUp: isSortedBySum
    }))
    setIsSortedBySum(!isSortedBySum)
  }

  const handleRowClick = () => {
    dispatch(formActions.setVisible(mockOrder))
  }

  return (
    <div className="table">
      <TableHeader onClick={handleFilterSort} />
      <TableOrdersList orders={ordersList} onOrderClick={handleRowClick}/>
      <TableFooter />
    </div>
  );
};

export default OrdersTable;
