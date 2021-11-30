import modalForm from "./css/ModalForm.module.css";
import { formatSum } from "../../helpers/FormatFunctions";

export const OrderFormItem = ({ article, orderName, price }) => {
  return (
    <li className={modalForm.ListItemRow}>
      <div className={modalForm.ListItem}>{article}</div>
      <div className={modalForm.ListItem}>{orderName}</div>
      <div className={modalForm.ListItem}>{formatSum(price)}</div>
    </li>
  );
};

