import SvgElement from "../Icons/SvgElement";

const Button = ({
  className,
  svgName,
  buttonText,
  textClassName = "button__text",
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick}>
      <SvgElement svgName={svgName} />
      <span className={textClassName}>{buttonText}</span>
    </button>
  );
};

export default Button;
