import Button from "../Common/Button";

const formClassname = "table__footer-dropdown";
const textClassName = "table__dropdown-title";
const deleteButtonClass =
  "table__dropdown-button table__dropdown-button_transparent";
const cancelButtonClass = "table__dropdown-button";

const FooterDropdown = ({ ordersCount, deleteHandler, cancelHandler }) => {
  return (
    <form className={formClassname}>
      <span className={textClassName}>Удалить {ordersCount} записей?</span>
      <Button
        className={deleteButtonClass}
        buttonText="Удалить"
        onClick={deleteHandler}
      />
      <Button
        className={cancelButtonClass}
        buttonText="Отмена"
        onClick={cancelHandler}
      />
    </form>
  );
};

export default FooterDropdown;
