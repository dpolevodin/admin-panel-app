import Button from "../Common/Button";


const PageHeader = ({
  wrapperClass = "page-header",
  headerClass = "page-header__text",
  headerText = "Список заказов",
  buttonClass = "page-header__button page-header__button_transparent",
  buttonText = "Cветлая тема",
  buttonIcon = "sun",
}) => {


  return (
    <div className={wrapperClass}>
      <h1 className={headerClass}>{headerText}</h1>
      <Button
        className={buttonClass}
        buttonText={buttonText}
        svgName={buttonIcon}
      />
    </div>
  );
};

export default PageHeader;
