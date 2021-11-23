import TableHeader from "./TableHeader";
import TableOrdersList from "./TableOrdersList";
import TableFooter from "./TableFooter";
import { useSelector, useDispatch } from "react-redux";
import { ordersActions } from "../../store/orders";
import { useState } from "react";


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
    dispatch(ordersActions.sortOrdersByCount({
      value: filtersMapping[valueToSort],
      SortUp: isSortedBySum
    }))
    setIsSortedBySum(!isSortedBySum)
  }

  return (
    <div className="table">
      <TableHeader onClick={handleFilterSort} />
      <TableOrdersList orders={ordersList} />
      <TableFooter />
    </div>
  );
};

export default OrdersTable;
