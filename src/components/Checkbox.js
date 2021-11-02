import SvgElement from "../components/SvgElement";


function checkbox ({className, placeholder}) {
    return (
        <div className="filter__dropdown-checkbox-group">
            <input type="checkbox" className="filter__dropdown-checkbox" />
            <SvgElement svgName="checkmark" />
        </div>
    )
}

export default checkbox;