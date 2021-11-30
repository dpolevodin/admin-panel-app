import dropdown from "./css/status-dropdown.module.css";

const DROPDOWN_STATUSES = ["Новый", "Расчет", "Отложен", "Выполнен", "Отменен"];

const StatusDropdown = ({
  className = dropdown._,
  isVisible,
  DropdownStatuses = DROPDOWN_STATUSES,
  id = "status-dropdown",
  onChange,
}) => {
  const dropdownClass = isVisible
    ? className
    : [className, dropdown.hidden].join(" ");

  const dropdownStatusRender = DropdownStatuses.map((element) => {
    return (
      <label className={dropdown.control} key={element}>
        <li className={dropdown.item}>
          <input
            className={dropdown.radio}
            type="radio"
            name="status"
            value={element}
          />
          <span className={dropdown.title}>{element}</span>
        </li>
      </label>
    );
  });

  return (
    <form className={dropdownClass} id={id} onChange={onChange}>
      <ul className={dropdown.list}>{dropdownStatusRender}</ul>
    </form>
  );
};

export default StatusDropdown;
