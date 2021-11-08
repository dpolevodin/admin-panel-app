function SvgElement ({svgName}) {
    return (
        <svg className="svg-icon">
            <use xlinkHref={`#${svgName}`}></use>
        </svg>
    )
}

export default SvgElement;
