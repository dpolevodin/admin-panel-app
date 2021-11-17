import Button from "../Common/Button";
import Input from "../Common/Input";

const mainComponentWrapperClass = "filter__input";
const labelClassName = "filter__input-control";
const buttonClassName = "filter__input-button";
const filterTitleClass = "filter__input-title";
const inputWrapperClassDefault = "filter__input-field filter__input-field_empty";
const inputShortClass = "filter__input-field_short";

const DateFilter = ({
  filterPlaceholder = "dd.mm.dddd",
  inputIconName = "incorrect",
  filterTitle,
  isShort = false,
  InputClass = "filter__input-area",
  inputStartId,
  InputEndId
}) => {
  return (
    <div className={mainComponentWrapperClass}>
      <label className={labelClassName}>
        <span className={filterTitleClass}>{filterTitle}</span>
        <div
          className={
            isShort
              ? [inputWrapperClassDefault, inputShortClass].join(" ")
              : inputWrapperClassDefault
          }
        >
          <Input className={InputClass} placeholder={filterPlaceholder} id={inputStartId}/>
  
          <Button className={buttonClassName} svgName={inputIconName} />
        </div>
      </label>

      <label className={labelClassName}>
        <div
          className={
            isShort
              ? [inputWrapperClassDefault, inputShortClass].join(" ")
              : inputWrapperClassDefault
          }
        >
          <Input className={InputClass} placeholder={filterPlaceholder} id={InputEndId}/>
          <Button className={buttonClassName} svgName={inputIconName} />
        </div>
      </label>
    </div>
  );
};

export default DateFilter;
