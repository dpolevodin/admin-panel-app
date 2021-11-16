import Button from "../Common/Button";
import Input from "../Common/Input";
import FilterDropdown from "../Filter/FilterDropdown";

const mainComponentWrapperClass = "filter__input";
const statusFilterPlaceholder = "Выберите статус заказа";
const statusFilterSvgName = "v_arrow";
const labelClassName = "filter__input-control";
const buttonClassName = "filter__input-button";
const inputClassName = "filter__input-area";
const inputWrapperClassName = "filter__input-field filter__input-field_empty filter__input-field_long";
const statusTitleClass = "filter__input-title";

function StatusFilter() {
  return (
    <div className={mainComponentWrapperClass}>
      <FilterDropdown isVisible />
      <label className={labelClassName}>
        <span className={statusTitleClass}>Статус заказа</span>
        <div className={inputWrapperClassName}>
          <Input
            className={inputClassName}
            placeholder={statusFilterPlaceholder}
            onFocus={() => {}}
          />
          <Button className={buttonClassName} svgName={statusFilterSvgName} />
        </div>
      </label>
    </div>
  );
}

export default StatusFilter;
