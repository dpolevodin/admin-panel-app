import Button from "../Common/Button";
import RangeFilter from "./RangeFilter";
import StatusFilter from "../Filter/StatusFilter";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import { useState } from "react";

const wrapperMainClass = "filter__wrapper";
const formClassName = "filter__form";
const buttonClassName =
  "filter-button filter-button_hidden-icon filter-button_short";

const FilterOptions = ({ isVisible }) => {
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const minStartOfSelectedPeriod = (string) => {
    const formatStringToList = string.split(".");
    return new Date(
      formatStringToList[2],
      formatStringToList[1] - 1,
      formatStringToList[0]
    );
  };

  new AirDatepicker("#dateStart", {
    maxDate: Date.now(),
  });

  new AirDatepicker("#dateEnd", {
    maxDate: Date.now(),
    minDate: minStartOfSelectedPeriod(dateStart),
  });

  const wrapperClassName = isVisible
    ? wrapperMainClass
    : [wrapperMainClass, wrapperMainClass + "_hidden"].join(" ");

  const handleInputClear = (id, event, isStart) => {
    event.preventDefault();
    const cuurenInputValue = document.getElementById(id);
    cuurenInputValue.value = "";
    isStart ? setDateStart("") : setDateEnd("")
  };

  const handleInputValue = (event, isStart) => {
    isStart ? setDateStart(event.target.value) : setDateEnd(event.target.value);
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
          onBlurInputStart={(e) => handleInputValue(e, true)}
          onBlurInputEnd={(e) => handleInputValue(e)}
        />

        <StatusFilter />

        <RangeFilter filterPlaceholder="₽" filterTitle="Сумма заказа" isShort />

        <Button
          className={buttonClassName}
          buttonText="Применить"
        />
      </form>
    </div>
  );
};

export default FilterOptions;
