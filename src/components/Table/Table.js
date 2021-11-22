import TableHeader from "./TableHeader";
import TableOrdersList from "./TableOrdersList";
import TableFooter from "./TableFooter";
import { ordersActions } from "../../store/orders";
import { useDispatch, useSelector } from "react-redux";
import MockList from "../../data/Orders.json";

const Table = () => {
  const dispatch = useDispatch();
  dispatch(ordersActions.setOrders(MockList));
  const { orders } = useSelector((state) => state.orders);

  const ordersList = !!orders ? orders : [];

  return (
    <div className="table">
      <TableHeader />
      <TableOrdersList orders={ordersList} />
      <TableFooter />
    </div>
  );
};

export default Table;
