const SvgElement = ({ svgName, className = "svg-icon" }) => {
  return (
    <svg className={className}>
      <use xlinkHref={`#${svgName}`}></use>
    </svg>
  );
};

export default SvgElement;
