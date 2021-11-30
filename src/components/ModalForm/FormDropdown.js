import Dropdown from "./css/Dropdown.module.css";
import Button from "../Common/Button";

const submitButtonText = "Сбросить";
const cancelButtonText = "Остаться";

const submitButtonClass = Dropdown.button + " " + Dropdown.transparent;
const cancelButtonClass = Dropdown.button;

const FooterDropdown = ({
  isOpen = true,
  handleResetButton,
  handleButton
}) => {
  const blockClass = isOpen
    ? Dropdown._
    : Dropdown._ + [Dropdown._, Dropdown.hidden].join(" ");

  return (
    <form className={blockClass}>
      <span className={Dropdown.title}>Есть несохраненные изменения</span>
      <Button
        className={submitButtonClass}
        buttonText={submitButtonText}
        textClassName={Dropdown.text}
        iconClassName={Dropdown.icon}
        onClick={handleResetButton}
      />
      <Button
        className={cancelButtonClass}
        buttonText={cancelButtonText}
        textClassName={Dropdown.text}
        iconClassName={Dropdown.icon}
        onClick={handleButton}
      />
    </form>
  );
};

export default FooterDropdown;
