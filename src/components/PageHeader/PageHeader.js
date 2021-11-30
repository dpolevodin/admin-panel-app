import Button from "../Common/Button";

const wrapperClass = "page-header"
const headerClass = "page-header__text"
const buttonClass = "page-header__button page-header__button_transparent"

const PageHeader = () => {
  return (
    <div className={wrapperClass}>
      <h1 className={headerClass}>Список заказов</h1>
      <Button
        className={buttonClass}
        buttonText="Cветлая тема"
        svgName='sun'
      />
    </div>
  );
};

export default PageHeader;
