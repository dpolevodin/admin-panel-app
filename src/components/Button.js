import SvgElement from './SvgElement'


function Button ({className, svgName, buttonText}) {
    return (
        <button className={className}>
                <SvgElement svgName={svgName} />
                <span className="button__text">{buttonText}</span>
        </button>
    )
}

export default Button;