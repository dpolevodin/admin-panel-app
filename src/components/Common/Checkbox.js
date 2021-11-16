import SvgElement from "../Icons/SvgElement";


function checkbox() {
    return (
        <div className="checkbox-group">
            <input type="checkbox" className="checkbox" />
            <SvgElement svgName="checkmark" />
        </div>
    )
}

export default checkbox;