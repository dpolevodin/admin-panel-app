import Button from "../Common/Button";


function FooterDropdown () {
    let ordersCount = 'n'

    return (
        <form className="table__footer-dropdown">
            <span className="table__dropdown-title">Удалить {ordersCount} записей?</span>
            <Button className="table__dropdown-button table__dropdown-button_transparent" buttonText="Удалить" />
            <Button className="table__dropdown-button" buttonText="Отмена" />
        </form>
    )
}

export default FooterDropdown;