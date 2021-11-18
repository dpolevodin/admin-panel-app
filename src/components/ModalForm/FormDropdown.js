import Dropdown from "./css/Dropdown.module.css";
import Button from "../Common/Button";

const submitButtonText = "Сохранить";
const cancelButtonText = "Отмена";

const submitButtonClass =
  "table__dropdown-button table__dropdown-button_transparent";
const cancelButtonClass = "table__dropdown-button";

const FooterDropdown = ({ isOpen = true }) => {
  const blockClass = isOpen
    ? Dropdown._
    : Dropdown._ + [Dropdown._, Dropdown.hidden].join(" ");

  return (
    <form className={blockClass}>
      <span className={Dropdown.title}>Есть несохраненные данные?</span>
      <Button className={submitButtonClass} buttonText={submitButtonText} />
      <Button className={cancelButtonClass} buttonText={cancelButtonText} />
    </form>
  );
};

export default FooterDropdown;
