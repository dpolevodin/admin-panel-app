import Button from "../Common/Button";


function PageHeader () {
    return (
        <div className="page-header">
            <h1 className="page-header__text">Список заказов</h1>
            <Button className="page-header__button page-header__button_transparent" buttonText="Cветлая тема" svgName="sun"/>
        </div>
    )
}

export default PageHeader;