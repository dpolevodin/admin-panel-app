import FooterOrdersSelected from "../Footer/FooterOrdersSelected";
import Button from "../Common/Button";
import FooterDropdown from "./FooterDropdown";
import { useState } from "react";

const FooterActions = ({ countsSelected = 0 }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false)

  const handleDropdownVisible = (event) => {
    event.preventDefault();
    setDropdownVisible(!dropdownVisible)
  }

  return (
    <form className="table__footer-action">
      <FooterOrdersSelected count={countsSelected} />
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
      {dropdownVisible && (<FooterDropdown />)}
    </form>
  );
};

export default FooterActions;
