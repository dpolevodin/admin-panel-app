import Button from "../Common/Button";
import RangeFilter from "./RangeFilter";
import StatusFilter from "../Filter/StatusFilter";

const wrapperMainClass = "filter__wrapper";
const formClassName = "filter__form";
const buttonClassName =
  "filter-button filter-button_hidden-icon filter-button_short";

const FilterOptions = ({ isVisible }) => {
  const wrapperClassName = isVisible
    ? wrapperMainClass
    : [wrapperMainClass, wrapperMainClass + "_hidden"].join(" ");

  const eventButtonClick = (event) => {
    event.preventDefault();
    console.log("filter's button click");
  };

  return (
    <div className={wrapperClassName}>
      <form className={formClassName}>
        <RangeFilter filterTitle="Дата оформления" />
        <StatusFilter />
        <RangeFilter filterPlaceholder="₽" filterTitle="Сумма заказа" isShort />
        <Button
          className={buttonClassName}
          buttonText="Применить"
          onClick={eventButtonClick}
        />
      </form>
    </div>
  );
};

export default FilterOptions;
