import TableHeader from "./TableHeader";
import TableOrdersList from "./TableOrdersList";
import TableFooter from "./TableFooter";
import { useSelector, useDispatch } from "react-redux";
import { ordersActions } from "../../store/orders";
import { formActions } from "../../store/modalForm";
import { useState } from "react";

const filtersMapping = {
  Дата: "creationDate",
  Статус: "status",
  Позиций: "positionsCount",
  Сумма: "sum",
};

const OrdersTable = () => {
  const [isSortedBySum, setIsSortedBySum] = useState(false);

  const { orders } = useSelector((state) => state);
  const ordersList = !!orders ? orders : [];

  const dispatch = useDispatch();

  const handleFilterSort = (event) => {
    const valueToSort = event.target.innerText;
    dispatch(
      ordersActions.sortOrders({
        value: filtersMapping[valueToSort],
        SortUp: isSortedBySum,
      })
    );
    setIsSortedBySum(!isSortedBySum);
  };

  const handleCheckbox = (event) => {
    console.log('checkbox clicked')
  }

  const handleRowClick = (event) => {
    const orderId = Number((event.target.parentNode).parentNode.innerText.slice(0, 7))
    const orderToSetFormData = orders.find(item => item.id === orderId)
    dispatch(formActions.setOrder(orderToSetFormData));
    dispatch(formActions.setVisible());
  };

  return (
    <div className="table">
      <TableHeader onClick={handleFilterSort} />
      <TableOrdersList
        orders={ordersList}
        onOrderClick={handleRowClick}
        onChangeCheckbox={handleCheckbox}
      />
      <TableFooter />
    </div>
  );
};

export default OrdersTable;
