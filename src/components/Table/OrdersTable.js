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
import { FooterActions } from "../Footer/FooterActions";
import { FooterPagination } from "../Footer/FooterPagination";

const FILTERS_MAP = {
  Дата: "creationDate",
  Статус: "status",
  Позиций: "positionsCount",
  Сумма: "sum",
};

export const OrdersTable = () => {
  const [isSorted, setIsSorted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dispatch = useDispatch();

  const pagination = useSelector((state) => state.pagination);
  const ordersCounts = useSelector((state) => state.orders).length;

  const orders = GetOrdersList();
  const ordersList = !!orders ? orders : [];

  const maxNumberOfPage = Math.ceil(
    ordersCounts / pagination.itemsCountPerPage
  );

  const currentPage = pagination.currentPage;

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

  const handleClickLast = (event) => {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handlePageDropdownSubmit = (event) => {
    event.preventDefault();
    const targetPage = event.target.page.value;
    if (
      isFinite(targetPage) &&
      targetPage <= maxNumberOfPage &&
      targetPage > 0
    ) {
      dispatch(paginationActions.setCurrentPage(targetPage));
      setIsDropdownOpen(!isDropdownOpen);
      event.target.page.value = "";
    } else {
      alert(`Введите номер страницы от 1 до ${maxNumberOfPage}`);
    }
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
      <TableFooter>
        <FooterActions />
        <FooterPagination
          onClick={handlePageChange}
          page={currentPage}
          maxPage={maxNumberOfPage}
          onClickLast={handleClickLast}
          onSubmit={handlePageDropdownSubmit}
          isVisible={isDropdownOpen}
        />
      </TableFooter>
    </div>
  );
};
