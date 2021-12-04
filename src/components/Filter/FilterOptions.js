import Button from "../Common/Button";
import RangeFilter from "./RangeFilter";
import StatusFilter from "../Filter/StatusFilter";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordersActions } from "../../store/orders";
import { dropdownActions } from "../../store/statusDropdown";
import { formatDateFilterValue } from "../../helpers/FormatFunctions";

const wrapperMainClass = "filter__wrapper";
const formClassName = "filter__form";
const buttonClassName =
  "filter-button filter-button_hidden-icon filter-button_short";

const FilterOptions = ({ isVisible }) => {
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const [sumStart, setSumStart] = useState(0);
  const [sumEnd, setSumEnd] = useState(Infinity);

  const statusData = useSelector(state => state.dropdown)
  const statuses = statusData ? statusData.join(', ') : 'Любой'

  const dispatch = useDispatch();

  new AirDatepicker("#dateStart", {
    maxDate: Date.now(),
  });

  new AirDatepicker("#dateEnd", {
    maxDate: Date.now(),
    minDate: formatDateFilterValue(dateStart),
  });

  const wrapperClassName = isVisible
    ? wrapperMainClass
    : [wrapperMainClass, wrapperMainClass + "_hidden"].join(" ");

  const handleInputClear = (id, event, isStart) => {
    event.preventDefault();
    const cuurenInputValue = document.getElementById(id);
    cuurenInputValue.value = "";
    isStart ? setDateStart("") : setDateEnd("");
  };

  const handleInputDateValue = (event, isStart) => {
    isStart ? setDateStart(event.target.value) : setDateEnd(event.target.value);
  };

  const handleInputSumValue = (event, isStart) => {
    isStart ? setSumStart(event.target.value) : setSumEnd(event.target.value);
  };

  const setDateFilterOptions = (dateStart, dateEnd) => {
    const minDate = dateStart
      ? formatDateFilterValue(dateStart)
      : new Date(1900);
    const maxDate = dateEnd ? formatDateFilterValue(dateEnd) : Date.now();
    dispatch(ordersActions.filterOrdersByDate(minDate, maxDate));
  };

  const setSumFilterOptions = (sumStart, sumEnd) => {
    const minSum = sumStart ? sumStart : 0;
    const maxSum = sumEnd ? sumEnd : 1000000;
    dispatch(ordersActions.filterOrdersBySum(minSum, maxSum));
  };

  const setStatusFilterOptions = () => {
    dispatch(ordersActions.filterOrdersByStatus(statuses));
  };

  const handleButtonSubmit = (event) => {
    event.preventDefault();
    setDateFilterOptions(dateStart, dateEnd);
    setSumFilterOptions(sumStart, sumEnd);
    setStatusFilterOptions()
  };

  const handleStatusFilterChange = (event) => {
    const value = event.target.name 
    console.log(value)
    dispatch(dropdownActions.setStatuses(value))
  }

  return (
    <div className={wrapperClassName}>
      <form className={formClassName} name='options'>
        <RangeFilter
          filterTitle="Дата оформления"
          inputStartId="dateStart"
          InputEndId="dateEnd"
          buttonHandlerStart={(e) => {
            handleInputClear("dateStart", e, true);
          }}
          buttonHandlerEnd={(e) => {
            handleInputClear("dateEnd", e);
          }}
          onBlurInputStart={(e) => handleInputDateValue(e, true)}
          onBlurInputEnd={(e) => handleInputDateValue(e)}
        />

        <StatusFilter statusValue={statuses} onChange={handleStatusFilterChange}/>

        <RangeFilter
          inputStartId="sumStart"
          InputEndId="sumEnd"
          filterPlaceholder="₽"
          filterTitle="Сумма заказа"
          isShort
          onChangeStart={(e) => handleInputSumValue(e, true)}
          onChangeEnd={(e) => handleInputSumValue(e)}
        />

        <Button className={buttonClassName} onClick={handleButtonSubmit}>
          Применить
        </Button>
      </form>
    </div>
  );
};

export default FilterOptions;
