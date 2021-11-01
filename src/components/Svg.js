function SvgElement ({svgName, className}) {
    return (
        <svg className={className}>
            <use xlinkHref={`#${svgName}`}></use>
        </svg> 
    )
}

export default SvgElement;
