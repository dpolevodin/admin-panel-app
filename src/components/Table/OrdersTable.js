import TableHeader from "./TableHeader";
import TableOrdersList from "./TableOrdersList";
import TableFooter from "./TableFooter";
import { useSelector, useDispatch } from "react-redux";
import { ordersActions } from "../../store/orders";
import { formActions } from "../../store/modalForm";
import { checkedOrdersActions } from "../../store/groupActions";
import { useState } from "react";

const filtersMapping = {
  Дата: "creationDate",
  Статус: "status",
  Позиций: "positionsCount",
  Сумма: "sum",
};

const OrdersTable = () => {
  const [isSorted, setIsSorted] = useState(false);

  const { orders } = useSelector((state) => state);
  const ordersList = !!orders ? orders : [];

  const dispatch = useDispatch();

  const handleFilterSort = (event) => {
    const valueToSort = event.target.innerText;
    dispatch(
      ordersActions.sortOrders({
        value: filtersMapping[valueToSort],
        SortUp: isSorted,
      })
    );
    setIsSorted(!isSorted);
  };

  const handleCheckbox = (event) => {
    const checkedId = Number(
      event.target.parentNode.parentNode.parentNode.parentNode.innerText.slice(0,7)
    );
    const CheckboxIsChecked = event.target.checked;
    if (CheckboxIsChecked) {
      dispatch(checkedOrdersActions.setCheckedOrders([checkedId]));
    } else {
      dispatch(checkedOrdersActions.deleteCheckedOrders([checkedId]));
    }
  };

  const handleRowClick = (event) => {
    const orderId = Number(
      event.target.parentNode.parentNode.innerText.slice(0, 7)
    );
    const orderToSetFormData = orders.find((item) => item.id === orderId);
    dispatch(formActions.setOrder(orderToSetFormData));
    dispatch(formActions.setVisible());
  };

  const handleCheckboxHeader = (event) => {
    const isCheckboxChecked = event.target.checked;
    const allId = orders.map((order) => order.id);
    const checkboxList = document.querySelectorAll(
      ".table__header-item .checkbox"
    );
    dispatch(checkedOrdersActions.clearCheckedOrders());
    for (let i = 1; i < checkboxList.length; i++) {
      isCheckboxChecked
        ? (checkboxList[i].checked = checkboxList[i].checked = true)
        : (checkboxList[i].checked = false);
    }
    isCheckboxChecked
      ? dispatch(checkedOrdersActions.setAllCheckedOrders(allId))
      : dispatch(checkedOrdersActions.clearCheckedOrders());
  };

  return (
    <div className="table">
      <TableHeader
        onClick={handleFilterSort}
        onChangeCheckbox={handleCheckboxHeader}
      />
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
