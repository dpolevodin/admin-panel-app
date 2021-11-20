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
          />
          <Button
            className={modalForm.button}
            svgName={icon}
            iconClassName={modalForm.input_icon}
          />
        </div>
      </label>
    </div>
  );
};

export default FormInput;

// <div class="input__group">
//     <label class="input__control">
//         <div class="input__field-name">Дата и время заказа</div>
//         <div class="input__field input__field_empty">
//             <input class="input__area" placeholder="Введите">
//             <button class="input__button">
//                 <svg class="input__icon">
//                     <use xlink:href="#incorrect"></use>
//                 </svg>
//                 <svg class="input__icon">
//                     <use xlink:href="#disabled"></use>
//                 </svg>
//             </button>
//         </div>
//     </label>
// </div>
