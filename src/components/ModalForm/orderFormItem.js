import modalForm from "./css/ModalForm.module.css";

const orderFormItem = ({
    article,
    orderName,
    price,
}) => {

    return (
                <li className={modalForm.ListItemRow}>
                    <div className={modalForm.ListItem}>{article}</div>
                    <div className={modalForm.ListItem}>{orderName}</div>
                    <div className={modalForm.ListItem}>{`${price.toLocaleString()} ₽`}</div>
                </li>
    )
}

export default orderFormItem