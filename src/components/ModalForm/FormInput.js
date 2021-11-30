import Button from "../Common/Button";
import Input from "../Common/Input";
import modalForm from "./css/ModalForm.module.css";

const FormInput = ({
  icon = "incorrect",
  placeholder = "dd.mm.dddd",
  isDisabled = false,
  title,
  defaultValue,
  isIncorrect = false,
  value,
  onChange,
  children,
  buttonHandler
}) => {
  let areaClass;

  if (isDisabled) {
    areaClass = modalForm.input_field + " " + modalForm.input_disabled;
  } else if (isIncorrect) {
    areaClass = modalForm.input_field + " " + modalForm.input_incorrect;
  } else {
    areaClass = modalForm.input_field;
  }

  return (
    <div className={modalForm.input_wrapper}>
      <label className={modalForm.input_label}>
        <span className={modalForm.input_title}>{title}</span>
        <div className={areaClass}>
          <Input
            className={modalForm.input_area}
            placeholder={placeholder}
            defaultValue={defaultValue}
            isDisabled={isDisabled}
            value={value}
            onChange={onChange}
          />
          <Button
            className={modalForm.button}
            svgName={icon}
            iconClassName={modalForm.input_icon}
            onClick={buttonHandler}
          />
          {children}
        </div>
      </label>
    </div>
  );
};

export default FormInput;