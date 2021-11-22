import OrderItem from '../Table/OrderItem'


const statusIconMapping = {
    'Новый': 'dot',
    'Расчет': 'dot',
    'Выполнен': 'checkmark',
    'Отменен': 'abort',
    'Отложен': 'dot',
}

const statusClassMapping = {
    'Новый': 'table__header-item',
    'Расчет': 'table__header-item table__header-item_blue',
    'Выполнен': 'table__header-item table__header-item_green',
    'Отменен': 'table__header-item table__header-item_half-transparent',
    'Отложен': 'table__header-item',
}

const TableOrdersList = ({
  className = "table__body",
  listClass = "table__body-list",
  orders,
}) => {

  const ordersRender = orders.map((order) => {
    return (
      <OrderItem
        {...order}
        statusClass={statusClassMapping[order.status]}
        iconClass={statusIconMapping[order.status]}
        key={order.id}
      />
    );
  });

  return (
    <div className={className}>
      <ul className={listClass}>{ordersRender}</ul>
    </div>
  );
};

export default TableOrdersList;