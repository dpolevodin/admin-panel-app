import modalForm from "./css/ModalForm.module.css";
import { useState } from "react";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import OrderTable from "./OrderTable";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../store/modalForm";
import FormDropdown from "./FormDropdown";

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

const formatDate = (dateString) =>
  new Date(dateString).toLocaleString([], {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

const ModalForm = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const isFormVisible = useSelector((state) => state.form.isVisible);
  const formData = useSelector((state) => state.form.order);

  const order = { ...formData };

  const handleDropdownOpen = (event) => {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSaveButton = (event) => {
    event.preventDefault();
    dispatch(formActions.setVisible());
  };

  const handleInput = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  const formMainClass = isFormVisible
    ? modalForm._
    : modalForm._ + " " + modalForm.hidden;

  return (
    <div className={formMainClass}>
      <div className={modalForm.form}>
        <FormHeader
          orderNumber={order.id}
          buttonHandler={handleDropdownOpen}
          isDropdownOpen={isDropdownOpen}
        />
        <FormDropdown
          isOpen={isDropdownOpen}
          handleButton={handleDropdownOpen}
        />

        <div className={modalForm.table}>
          <FormInput
            isDisabled
            title="Дата и время заказа"
            value={formatDate(order.creationDate)}
            icon="locked"
          />
          <FormInput
            title="ФИО покупателя"
            placeholder="Введите ФИО"
            value={order.name}
            onChange={handleInput}
          />

          <OrderTable orders={exampleOrdersList} />

          <FormInput
            isDisabled
            title="Уровень лояльности"
            placeholder="Введите ФИО"
            value={order.loyalty}
            icon="locked"
          />
          <FormInput
            title="Статус заказа"
            placeholder="Выберите статус заказа"
            value={order.status}
            icon="v_arrow"
          />
          <FormInput
            isIncorrect
            title="Код подтверждения"
            placeholder="Введите ФИО"
            value={order.confirmCode}
          />
        </div>

        <FormFooter buttonHandler={handleSaveButton} />
      </div>
    </div>
  );
};

export default ModalForm;
