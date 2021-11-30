import modalForm from "./css/ModalForm.module.css";
import Button from "../Common/Button";
import Loader from "../Common/Loader";
import { useState } from "react";

const FormFooter = ({
  buttonHandler,
}) => {
  const [whatIsShow, setWhatIsShow] = useState(true);
  const changeFooterContent = () => {
    setTimeout(() => setWhatIsShow(false), 3000);
  };

  changeFooterContent();

  return (
    <footer className={modalForm.footer}>
      <div className={modalForm.footer__text}>
        {whatIsShow && <Loader isVisible />}
        {!whatIsShow && 'Ошибка или индикатор загрузки'}
      </div>

      <Button
        className={modalForm.footer__button}
        svgName="checkmark"
        iconClassName={modalForm.footer__icon}
        onClick={buttonHandler}
      >
        Сохранить
      </Button>
    </footer>
  );
};

export default FormFooter;
