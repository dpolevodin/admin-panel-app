import Button from "../Common/Button";


const PageHeader = ({
    wrapperClass = "page-header",
    headerClass = "page-header__text",
    headerText = "Список заказов"
}) => {
    return (
        <div className={wrapperClass}>
            <h1 className={headerClass}>{headerText}</h1>
            <Button className="page-header__button page-header__button_transparent" buttonText="Cветлая тема" svgName="sun"/>
        </div>
    )
}

export default PageHeader;