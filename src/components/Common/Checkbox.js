import SvgElement from "../Icons/SvgElement";

const wrapperClassname = "checkbox-group";
const inputType = "checkbox";

const checkbox = ({
  className = "checkbox",
  checkboxIconName = "checkmark",
}) => {
  return (
    <div className={wrapperClassname}>
      <input type={inputType} className={className} />
      <SvgElement svgName={checkboxIconName} />
    </div>
  );
};

export default checkbox;
