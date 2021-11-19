import modalForm from "./css/ModalForm.module.css";
import { useState } from "react";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";
import Loader from "../Common/Loader";
import FormInput from "./FormInput";

const exampleOrderNumber = "2353474";

const ModalForm = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const footerContent = () => {
    return <Loader />;
  };

  const handleDropdownOpen = (event) => {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={modalForm._}>
      <div className={modalForm.form}>
        <FormHeader
          orderNumber={exampleOrderNumber}
          buttonHandler={handleDropdownOpen}
          isDropdownOpen={isDropdownOpen}
        />

        <div className={modalForm.table}>
          <FormInput isDisabled defaultValue="06.12.2021" icon="locked" />
          <FormInput title="ФИО покупателя" placeholder="Введите ФИО" defaultValue="Степан" />       
          <FormInput isDisabled title="Уровень лояльности" placeholder="Введите ФИО" defaultValue="Новичок" icon="locked" />   
          <FormInput title="Статус заказа" placeholder="Введите ФИО" defaultValue="Новый" icon="v_arrow"/>
          <FormInput isIncorrect title="Код подтверждения" placeholder="Введите ФИО" defaultValue="000" />          
        </div>

        <FormFooter />
      </div>
    </div>
  );
};

export default ModalForm;
