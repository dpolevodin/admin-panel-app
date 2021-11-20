import modalForm from "./css/ModalForm.module.css";
import { useState } from "react";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import OrderTable from "./OrderTable";

const exampleOrderNumber = "2353474";
const exampleOrdersList = [
  {
    article: "rt.12024",
    orderName: "Стил блейдс фо грасс",
    price: 15339,
  },
  {
    article: "al.24600",
    orderName: "Газонокосилка Apple Magic Grass Remover",
    price: 82664,
  },
];

const ModalForm = ({ isVisible = false }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(isVisible);

  const handleDropdownOpen = (event) => {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const formMainClass = isFormOpen
    ? modalForm._
    : modalForm._ + " " + modalForm.hidden;

  return (
    <div className={formMainClass}>
      <div className={modalForm.form}>
        <FormHeader
          orderNumber={exampleOrderNumber}
          buttonHandler={handleDropdownOpen}
          isDropdownOpen={isDropdownOpen}
        />

        <div className={modalForm.table}>
          <FormInput
            isDisabled
            title="Дата и время заказа"
            defaultValue="06.12.2021"
            icon="locked"
          />
          <FormInput
            title="ФИО покупателя"
            placeholder="Введите ФИО"
            defaultValue="Степан"
          />

          <OrderTable orders={exampleOrdersList} />

          <FormInput
            isDisabled
            title="Уровень лояльности"
            placeholder="Введите ФИО"
            defaultValue="Новичок"
            icon="locked"
          />
          <FormInput
            title="Статус заказа"
            placeholder="Введите ФИО"
            defaultValue="Новый"
            icon="v_arrow"
          />
          <FormInput
            isIncorrect
            title="Код подтверждения"
            placeholder="Введите ФИО"
            defaultValue="000"
          />
        </div>

        <FormFooter
          buttonHandler={(e) => {
            console.log(isFormOpen);
            e.preventDefault();
            setIsFormOpen(!isFormOpen);
          }}
        />
      </div>
    </div>
  );
};

export default ModalForm;
