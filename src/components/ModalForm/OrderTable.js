import modalForm from "./css/ModalForm.module.css";
import OrderFormItem from "./orderFormItem";

const OrderTable = ({ orders }) => {
  const ordersRender = orders.map((item) => {
    return <OrderFormItem {...item} key={item.article} />;
  });

  const finalSum = orders
    .reduce((accum, item) => accum + item.price, 0)
    .toLocaleString();

  return (
    <div className={modalForm.OrderTable}>
      <ul className={modalForm.OrdersList}>
        <li className={modalForm.ListHeader}>
          <div className={modalForm.ListItem}>Артикул</div>
          <div className={modalForm.ListItem}>Наименование</div>
          <div className={modalForm.ListItem}>Цена</div>
        </li>

        {ordersRender}

        <li className={modalForm.ListFooter}>
          {`Итоговая сумма: ${finalSum} ₽`}
        </li>
      </ul>
    </div>
  );
};

export default OrderTable;
