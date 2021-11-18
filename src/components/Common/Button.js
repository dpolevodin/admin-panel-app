import SvgElement from "../Icons/SvgElement";

const Button = ({
  className,
  svgName,
  buttonText,
  textClassName = "button__text",
  onClick,
  iconClassName
}) => {
  return (
    <button className={className} onClick={onClick}>
      <SvgElement svgName={svgName} className={iconClassName} />
      <span className={textClassName}>{buttonText}</span>
    </button>
  );
};

export default Button;
