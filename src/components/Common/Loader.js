import SvgElement from "../Icons/SvgElement";

const loaderMainClass = "filter__loader"

const Loader = ({
    isVisible
}) => {
    const loaderClass = isVisible ? loaderMainClass : [loaderMainClass, (loaderMainClass + "_hidden")].join(' ')
    return (
        <div className={loaderClass}>
            <SvgElement svgName="refresh"/>
            <span className="filter__loader-text">Загрузка</span>
        </div> 
    )
}

export default Loader;