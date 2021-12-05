import modalForm from "./css/ModalForm.module.css";
import Button from "../Common/Button";
import { Loader } from "../Common/Loader";
import { useState } from "react";

const FormFooter = ({ buttonHandler }) => {
  const [isLoaderShow, setIsloaderShow] = useState(true);

  setTimeout(() => {
    setIsloaderShow(false);
  }, 3000);

  const footerContent = isLoaderShow ? (
    <Loader isLoading />
  ) : (
    "Ошибка или индикатор загрузки"
  );
  return (
    <footer className={modalForm.footer}>
      <div className={modalForm.footer__text}>{footerContent}</div>

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
