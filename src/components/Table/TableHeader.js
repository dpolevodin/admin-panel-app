import SvgElement from "../Icons/SvgElement";
import Checkbox from "../Common/Checkbox";

const headerTitles = [
    "",
    "#",
    "Дата",
    "Статус",
    "Позиций",
    "Сумма",
    "ФИО покупателя",
  ];
  const itemClassName = "table__header-item";
  const itemTextClassName = "table__header-item-text";

const TableHeader = () => {


  const headerTitlesRender = headerTitles.map((item) => {
    if (item === "") {
      return (
        <li className={itemClassName} key={headerTitles.indexOf(item)}>
          <label className="table__checkbox-control">
            <Checkbox />
          </label>
        </li>
      );
    } else if (
      item === "Дата" ||
      item === "Статус" ||
      item === "Позиций" ||
      item === "Сумма"
    ) {
      return (
        <li className={itemClassName} key={headerTitles.indexOf(item)}>
          <span className={itemTextClassName}>{item}</span>
          <SvgElement svgName="v_arrow" />
        </li>
      );
    } else {
      return (
        <li className={itemClassName} key={headerTitles.indexOf(item)}>
          <span className={itemTextClassName}>{item}</span>
        </li>
      );
    }
  });

  return (
    <div className="table__header">
      <ul className="table__header-list">{headerTitlesRender}</ul>
    </div>
  );
};

export default TableHeader;
