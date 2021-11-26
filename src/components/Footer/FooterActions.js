import FooterOrdersSelected from "../Footer/FooterOrdersSelected";
import Button from "../Common/Button";
import FooterDropdown from "./FooterDropdown";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordersActions } from "../../store/orders";
import { checkedOrdersActions } from "../../store/groupActions";

const FooterActions = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const countsSelected = useSelector((state) => state.checkedOrders);
  const dispatch = useDispatch()

  const handleDropdownVisible = (event) => {
    event.preventDefault();
    setDropdownVisible(!dropdownVisible);
  };

  const handleButtonDelete = event => {
    event.preventDefault()
    dispatch(ordersActions.deleteCheckedOrders([...countsSelected]))
    dispatch(checkedOrdersActions.clearCheckedOrders())
    setDropdownVisible(!dropdownVisible);
  }

  return (
    <form className="table__footer-action">
      <FooterOrdersSelected count={countsSelected.length} />
      <Button
        className={"table__footer-button table__footer-button_blue"}
        buttonText={"Изменить статус"}
        svgName={"pencil"}
      />
      <Button
        className={"table__footer-button table__footer-button_red"}
        buttonText={"Удалить"}
        svgName={"bin"}
        onClick={handleDropdownVisible}
      />
      {dropdownVisible && (
        <FooterDropdown deleteHandler={handleButtonDelete} cancelHandler={handleDropdownVisible} />
      )}
    </form>
  );
};

export default FooterActions;
