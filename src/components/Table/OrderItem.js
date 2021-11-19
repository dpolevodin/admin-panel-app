import Checkbox from "../Common/Checkbox";
import SvgElement from "../Icons/SvgElement";

const orderWrapperClass = "table__body-item";
const orderLabelClass = "table__checkbox-control";
const orderRowClass = "table__body-item-row";
const itemClass = "table__header-item";
const itemTextClass = "table__header-item-text";

const randomKey = () => Math.random()

const OrderItem = ({
  id,
  creationDate,
  statusClass,
  iconClass,
  status,
  positionsCount,
  sum,
  name,
}) => {
  const renderedItems = [
    <Checkbox />,
    id,
    creationDate,
    status,
    positionsCount,
    sum,
    name,
  ].map((item) => {
    if (item === <Checkbox />) {
      return (
        <li className={itemClass} key={'Checkbox'}>
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
    }
    return (
      <li className={itemClass} key={item + randomKey()}>
        <span className={itemTextClass}>{item}</span>
      </li>
    );
  });

  return (
    <li className={orderWrapperClass}>
      <label className={orderLabelClass}>
        <ul className={orderRowClass}>{renderedItems}</ul>
      </label>
    </li>
  );
};

export default OrderItem;
