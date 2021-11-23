import TableHeader from "./TableHeader";
import TableOrdersList from "./TableOrdersList";
import TableFooter from "./TableFooter";
import { useSelector } from "react-redux";

const OrdersTable = () => {

  const { orders } = useSelector((state) => state);  
  const ordersList = !!orders ? orders : [];

  return (
    <div className="table">
      <TableHeader />
      <TableOrdersList orders={ordersList} />
      <TableFooter />
    </div>
  );
};

export default OrdersTable;
