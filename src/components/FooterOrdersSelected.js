function FooterOrdersSelected ({count}) {
    const ordersSelectedCount = count

    return (
        <span className="table__footer-text">Выбрано записей: {ordersSelectedCount}</span>
    )
}

export default FooterOrdersSelected;