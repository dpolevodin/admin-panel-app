import SvgElement from "../Icons/SvgElement";
import Input from "../Common/Input";

const inputClassName = "filter__searchbar-area";

const Searchbar = ({
  labelClass,
  wrapperClass,
  inputAreaClass,
  placeholder = "Номер заказа или ФИО",
  value,
  children,
  onChange,
}) => {
  return (
    <label className={labelClass}>
      <div className={wrapperClass}>
        <div className={inputAreaClass}>
          <SvgElement svgName="search" />
          <Input
            className={inputClassName}
            placeholder={placeholder}
            name="searchbar"
            value={value}
            onChange={onChange}
          />
        </div>
        {children}
      </div>
    </label>
  );
};

export default Searchbar;
