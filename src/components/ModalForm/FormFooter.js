import modalForm from "./css/ModalForm.module.css";
import Button from "../Common/Button";
import Loader from "../Common/Loader";
import { useState } from "react";

const FormFooter = ({
  errorText = "Ошибка или индикатор загрузки",
  buttonIconName = "checkmark",
  buttonText = "Сохранить",
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
        {!whatIsShow && errorText}
      </div>

      <Button
        className={modalForm.footer__button}
        svgName={buttonIconName}
        buttonText={buttonText}
        iconClassName={modalForm.footer__icon}
        onClick={buttonHandler}
      />
    </footer>
  );
};

export default FormFooter;
