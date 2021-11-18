import SvgElement from "../Icons/SvgElement";

const loaderMainClass = "filter__loader";
const loaderTextClass = "filter__loader-text";

const Loader = ({ isVisible, loaderIcon = "refresh" }) => {
  const loaderClass = isVisible
    ? loaderMainClass
    : [loaderMainClass, loaderMainClass + "_hidden"].join(" ");
  return (
    <div className={loaderClass}>
      <SvgElement svgName={loaderIcon} />
      <span className={loaderTextClass}>Загрузка</span>
    </div>
  );
};

export default Loader;
