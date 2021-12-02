import TableHeader from "./TableHeader";
import { TableOrdersList } from "./TableOrdersList";
import { TableFooter } from "./TableFooter";
import { useDispatch, useSelector } from "react-redux";
import { ordersActions } from "../../store/orders";
import { paginationActions } from "../../store/pagination";
import { formActions } from "../../store/modalForm";
import { checkedOrdersActions } from "../../store/groupActions";
import { useState } from "react";
import { GetOrdersList } from "../../store/selectors/getOrdersList";

const FILTERS_MAP = {
  Дата: "creationDate",
  Статус: "status",
  Позиций: "positionsCount",
  Сумма: "sum",
};

export const OrdersTable = () => {
  const [isSorted, setIsSorted] = useState(false);
  const pagination = useSelector((state) => state.pagination);
  const ordersCounts = useSelector((state) => state.orders).length;

  const orders = GetOrdersList();
  const ordersList = !!orders ? orders : [];

  const currentPage = pagination.currentPage;
  const maxNumberOfPage = Math.ceil(
    ordersCounts / pagination.itemsCountPerPage
  );
  const dispatch = useDispatch();

  const handleFilterSort = (event) => {
    const valueToSort = event.target.innerText;
    dispatch(
      ordersActions.sortOrders({
        value: FILTERS_MAP[valueToSort],
        SortUp: isSorted,
      })
    );
    setIsSorted(!isSorted);
  };

  const handleCheckbox = (event) => {
    const checkedId = Number(
      event.target.parentNode.parentNode.parentNode.parentNode.innerText.slice(
        0,
        7
      )
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

  const handlePageChange = (event) => {
    event.preventDefault();
    const page = event.target.innerText;
    dispatch(paginationActions.setCurrentPage(page));
  };

  return (
    <div className="table">
      <TableHeader
        onClick={handleFilterSort}
        onChangeCheckbox={handleCheckboxHeader}
      />
      <TableOrdersList
        orders={ordersList}
        onClick={handleRowClick}
        onChange={handleCheckbox}
      />
      <TableFooter
        onClick={handlePageChange}
        page={currentPage}
        maxPage={maxNumberOfPage}
      />
    </div>
  );
};
