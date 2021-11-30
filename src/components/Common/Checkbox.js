import SvgElement from "../Icons/SvgElement";

const wrapperClassname = "checkbox-group";
const inputType = "checkbox";

const checkbox = ({
  className = "checkbox",
  checkboxIconName = "checkmark",
  onChange,
  checked,
}) => {
  return (
    <div className={wrapperClassname}>
      <input type={inputType} className={className} onChange={onChange} checked={checked}/>
      <SvgElement svgName={checkboxIconName} />
    </div>
  );
};

export default checkbox;
