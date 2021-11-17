import Button from "../Common/Button";

const formClassname = "table__footer-dropdown"
const textClassName = "table__dropdown-title"


const FooterDropdown = ({
    ordersCount = 0,
}) => {
    return (
        <form className={formClassname}>
            <span className={textClassName}>Удалить {ordersCount} записей?</span>
            <Button className="table__dropdown-button table__dropdown-button_transparent" buttonText="Удалить" />
            <Button className="table__dropdown-button" buttonText="Отмена" />
        </form>
    )
}

export default FooterDropdown;