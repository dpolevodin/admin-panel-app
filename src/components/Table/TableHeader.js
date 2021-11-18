import SvgElement from "../Icons/SvgElement";
import Checkbox from "../Common/Checkbox";

const itemClassName = "table__header-item";
const itemTextClassName = "table__header-item-text";
const checkboxLabelClass = "table__checkbox-control";
const listClass = "table__header-list";

const headerTitles = [
  "",
  "#",
  "Дата",
  "Статус",
  "Позиций",
  "Сумма",
  "ФИО покупателя",
];

const statusWithFilterList = ["Дата", "Статус", "Позиций", "Сумма"];

const TableHeader = ({
  className = "table__header",
  headerList = headerTitles,
  headerFiltersIcon = "v_arrow",
}) => {
  const headerTitlesRender = headerList.map((item) => {
    if (item === "") {
      return (
        <li className={itemClassName} key={item}>
          <label className={checkboxLabelClass}>
            <Checkbox />
          </label>
        </li>
      );
    } else if (statusWithFilterList.includes(item)) {
      return (
        <li className={itemClassName} key={item}>
          <span className={itemTextClassName}>{item}</span>
          <SvgElement svgName={headerFiltersIcon} />
        </li>
      );
    } else {
      return (
        <li className={itemClassName} key={item}>
          <span className={itemTextClassName}>{item}</span>
        </li>
      );
    }
  });

  return (
    <div className={className}>
      <ul className={listClass}>{headerTitlesRender}</ul>
    </div>
  );
};

export default TableHeader;
