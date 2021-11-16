import Button from "../Common/Button";
import RangeFilter from "./RangeFilter";
import StatusFilter from "../Filter/StatusFilter";


const wrapperClassName = "filter__form";
const formClassName = "filter__form";
const buttonClassName = "filter-button filter-button_hidden-icon filter-button_short";

const FilterOptions = () => {
  return (
    <div className={wrapperClassName}>
      <form className={formClassName}>
        <RangeFilter filterTitle="Дата оформления" />
        <StatusFilter />
        <RangeFilter filterPlaceholder="₽" filterTitle="Сумма заказа" isShort/>
        <Button className={buttonClassName} buttonText="Применить" />
      </form>
    </div>
  );
};

export default FilterOptions;
