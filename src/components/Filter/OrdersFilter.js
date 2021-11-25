import FilterPrimary from "./FilterPrimary";
import FilterOptions from "./FilterOptions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ordersActions } from "../../store/orders";
import Mocks from "../../data/Orders.json";

const OrdersFilter = ({ className = "filter" }) => {
  const [optionsVision, setOptionsVision] = useState(false);
 
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    dispatch(ordersActions.setOrders(Mocks));
    const value = String(
      document.querySelector(".filter__searchbar-area").value
    ).toLowerCase();
    if (value === "") {
      dispatch(ordersActions.setOrders(Mocks));
    } else {
      dispatch(ordersActions.searchOrders(value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleOptionsVisible = (event) => {
    event.preventDefault();
    optionsVision ? setOptionsVision(false) : setOptionsVision(true);
  };

  const resetFiltersHandler = (event) => {
    event.preventDefault();
    dispatch(ordersActions.setOrders(Mocks));
  };

  return (
    <div className={className}>
      <FilterPrimary
        onChange={handleChange}
        onSubmit={handleSubmit}
        buttonFiltersHandler={handleOptionsVisible}
        resetFiltersHandler={resetFiltersHandler}
      />
      <FilterOptions isVisible={optionsVision} />
    </div>
  );
};

export default OrdersFilter;
