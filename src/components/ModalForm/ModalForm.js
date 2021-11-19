import modalForm from "./css/ModalForm.module.css";
import Button from "../Common/Button";
import FormDropdown from './FormDropdown';
import { useState } from "react";

const headerIconName = "incorrect";
const footerIconName = "checkmark";
const buttonText = 'Сохранить'

const ModalForm = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleDropdownOpen = (event) => {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className={modalForm._}>
      <div className={modalForm.form}>
        <header className={modalForm.header}>
          <div className={modalForm.header__title}>Заявка #2353474</div>
          <Button
            className={modalForm.button}
            svgName={headerIconName}
            iconClassName={modalForm.header__icon}
            onClick={handleDropdownOpen}
          />
          <FormDropdown isOpen={isDropdownOpen}/>
        </header>
        <div className={modalForm.table}></div>
        <footer className={modalForm.footer}>
          <div className={modalForm.footer__text}>
            Ошибка или индикатор загрузки
          </div>
          <Button
            className={modalForm.footer__button}
            svgName={footerIconName}
            buttonText={buttonText}
            iconClassName={modalForm.footer__icon}
          />
        </footer>
      </div>
    </div>
  );
};

export default ModalForm;
