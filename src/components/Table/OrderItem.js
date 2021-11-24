import Checkbox from "../Common/Checkbox";
import SvgElement from "../Icons/SvgElement";

const orderWrapperClass = "table__body-item";
const orderLabelClass = "table__checkbox-control";
const orderRowClass = "table__body-item-row";
const itemClass = "table__header-item";
const itemTextClass = "table__header-item-text";

const randomKey = () => Math.random();

const formatDate = (dateString) =>
  new Date(dateString).toLocaleString([], {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

const OrderItem = ({
  id,
  creationDate,
  statusClass,
  iconClass,
  status,
  positionsCount,
  sum,
  name,
  onOrderClick,
  onChangeCheckbox
}) => {
  const checkboxItem = (
    <label className={orderLabelClass}>
      <Checkbox onChange={onChangeCheckbox}/>
    </label>
  );
  const renderedItems = [
    checkboxItem,
    id,
    creationDate,
    status,
    positionsCount,
    sum,
    name,
  ].map((item) => {
    if (item === <Checkbox />) {
      return (
        <li className={itemClass} key={"Checkbox"}>
          <Checkbox />
        </li>
      );
    } else if (item === status) {
      return (
        <li className={statusClass} key={item}>
          <SvgElement svgName={iconClass} />
          <span className={itemTextClass}>{item}</span>
        </li>
      );
    } else if (item === sum) {
      return (
        <li className={itemClass} key={item}>
          <span className={itemTextClass}>
            {item === 0 ? "-" : `${item.toLocaleString()} ₽`}
          </span>
        </li>
      );
    } else if (item === creationDate) {
      return (
        <li className={itemClass} key={item}>
          <span className={itemTextClass}>{formatDate(item)}</span>
        </li>
      );
    }
    return (
      <li className={itemClass} key={item + randomKey()} >
        <span className={itemTextClass}>{item}</span>
      </li>
    );
  });

  return (
    <li className={orderWrapperClass} onClick={onOrderClick}>
      <ul className={orderRowClass} >
        {renderedItems}
      </ul>
    </li>
  );
};

export default OrderItem;
