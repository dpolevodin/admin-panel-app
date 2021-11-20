import modalForm from "./css/ModalForm.module.css";
import Button from "../Common/Button";
import FormDropdown from "./FormDropdown";
const headerIconName = "incorrect";

const FormHeader = ({ buttonHandler, isDropdownOpen, orderNumber = "" }) => {
  return (
    <header className={modalForm.header}>
      <div className={modalForm.header__title}>{`Заявка #${orderNumber}`}</div>
      <Button
        className={modalForm.button}
        svgName={headerIconName}
        iconClassName={modalForm.header__icon}
        onClick={buttonHandler}
      />
      <FormDropdown isOpen={isDropdownOpen} />
    </header>
  );
};

export default FormHeader;
