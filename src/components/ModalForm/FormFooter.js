import modalForm from "./css/ModalForm.module.css";
import Button from "../Common/Button";

const FormFooter = ({
  content = "Ошибка или индикатор загрузки",
  buttonIconName = "checkmark",
  buttonText = "Сохранить",
}) => {
  return (
    <footer className={modalForm.footer}>
      <div className={modalForm.footer__text}>
        {content}
      </div>

      <Button
        className={modalForm.footer__button}
        svgName={buttonIconName}
        buttonText={buttonText}
        iconClassName={modalForm.footer__icon}
      />
    </footer>
  );
};

export default FormFooter;
