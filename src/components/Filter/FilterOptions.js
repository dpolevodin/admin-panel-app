import Button from "../Common/Button";
import RangeFilter from "./RangeFilter";
import StatusFilter from "../Filter/StatusFilter";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ordersActions } from "../../store/orders";

const wrapperMainClass = "filter__wrapper";
const formClassName = "filter__form";
const buttonClassName =
  "filter-button filter-button_hidden-icon filter-button_short";

const FilterOptions = ({ isVisible }) => {
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const [sumStart, setSumStart] = useState(0);
  const [sumEnd, setSumEnd] = useState(1000000);

  const dispatch = useDispatch();

  const formattingDate = (string) => {
    const formatString = string.split(".");
    return new Date(formatString[2], formatString[1] - 1, formatString[0]);
  };

  new AirDatepicker("#dateStart", {
    maxDate: Date.now(),
  });

  new AirDatepicker("#dateEnd", {
    maxDate: Date.now(),
    minDate: formattingDate(dateStart),
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
    const minDate = dateStart ? formattingDate(dateStart) : new Date(1900);
    const maxDate = dateEnd ? formattingDate(dateEnd) : Date.now();
    dispatch(ordersActions.filterOrdersByDate(minDate, maxDate));
  };

  const setSumFilterOptions = (sumStart, sumEnd) => {
    const minSum = sumStart ? sumStart : 0;
    const maxSum = sumEnd ? sumEnd : 1000000;
    dispatch(ordersActions.filterOrdersBySum(minSum, maxSum));
  };

  const handleButtonSubmit = (event) => {
    event.preventDefault();
    setDateFilterOptions(dateStart, dateEnd);
    setSumFilterOptions(sumStart, sumEnd);
  };

  return (
    <div className={wrapperClassName}>
      <form className={formClassName}>
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

        <StatusFilter />

        <RangeFilter
          inputStartId="sumStart"
          InputEndId="sumEnd"
          filterPlaceholder="₽"
          filterTitle="Сумма заказа"
          isShort
          onChangeStart={(e) => handleInputSumValue(e, true)}
          onChangeEnd={(e) => handleInputSumValue(e)}
        />

        <Button
          className={buttonClassName}
          buttonText="Применить"
          onClick={handleButtonSubmit}
        />
      </form>
    </div>
  );
};

export default FilterOptions;
