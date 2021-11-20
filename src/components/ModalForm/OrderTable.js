import modalForm from "./css/ModalForm.module.css";
import OrderFormItem from "./orderFormItem";

const ordersList = [
  {
    article: "rt.12024",
    orderName: "Стил блейдс фо грасс",
    price: 15339,
  },
  {
    article: "al.24600",
    orderName: "Газонокосилка Apple Magic Grass Remover",
    price: 82664,
  },
];

const OrderTable = () => {
  const ordersRender = ordersList.map((item) => {
    return <OrderFormItem {...item} key={item.article} />;
  });

  const finalSum = ordersList.reduce((accum, item) => accum + item.price, 0);

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
          {`Итоговая сумма: ${finalSum.toLocaleString()} ₽`}
        </li>
      </ul>
    </div>
  );
};

export default OrderTable;
