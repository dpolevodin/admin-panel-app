import SvgElement from "../icons/SvgElement";


function Loader () {
    return (
        <div className="filter__loader">
            <SvgElement svgName="refresh"/>
            <span className="filter__loader-text">Загрузка</span>
        </div> 
    )
}

export default Loader;