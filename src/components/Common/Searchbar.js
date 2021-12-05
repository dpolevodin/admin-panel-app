import SvgElement from "../Icons/SvgElement";
import Button from "../Common/Button";
import Input from "../Common/Input";

const inputClassName = "filter__searchbar-area";

const Searchbar = ({
  labelClass,
  wrapperClass,
  inputAreaClass,
  placeholder = "Номер заказа или ФИО",
  searchIconName = "search",
  buttonClass = "filter__searchbar-button",
  buttonIcon = "incorrect",
  onClick,
  value,
}) => {
  return (
    <label className={labelClass}>
      <div className={wrapperClass}>
        <div className={inputAreaClass}>
          <SvgElement svgName={searchIconName} />
          <Input
            className={inputClassName}
            placeholder={placeholder}
            name="searchbar"
            value={value}
          />
        </div>
        <Button
          className={buttonClass}
          svgName={buttonIcon}
          onClick={onClick}
        />
      </div>
    </label>
  );
};

export default Searchbar;
