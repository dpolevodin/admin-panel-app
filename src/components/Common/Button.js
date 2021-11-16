import SvgElement from '../Icons/SvgElement'


const Button = ({
    className, 
    svgName, 
    buttonText,
    textClassName = "button__text"
}) => {
    return (
        <button className={className}>
                <SvgElement svgName={svgName} />
                <span className={textClassName}>{buttonText}</span>
        </button>
    )
}

export default Button;