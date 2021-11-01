import SvgElement from "./Svg";

function PageHeader () {
    return (
        <div className="page-header">
            <h1 className="page-header__text">Список заказов</h1>
            <button className="page-header__button page-header__button_transparent">
                <SvgElement svgName='sun' className="page-header__icon"/>
                <span className="page-header__button__text">Cветлая тема</span>
            </button>
        </div>
    )
}

export default PageHeader;