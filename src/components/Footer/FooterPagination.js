import Button from "../Common/Button";

const paginationElements = ["1", "2", "3", "…", "18"];

const FooterPagination = ({ elementsToPagination = paginationElements }) => {
  const paginatioRender = elementsToPagination.map((item) => {
    if (item === "1") {
      return (
        <Button
          className={"table__footer-button table__footer-button_small"}
          buttonText={item}
          key={paginationElements.indexOf(item)}
        />
      );
    } else if (Number(item)) {
      return (
        <Button
          className={
            "table__footer-button table__footer-button_small table__footer-button_transparent"
          }
          buttonText={item}
          key={paginationElements.indexOf(item)}
        />
      );
    } else {
      return (
        <span
          className="table__pagination-continue"
          key={paginationElements.indexOf(item)}
        >
          …
        </span>
      );
    }
  });

  return (
    <div className="table__footer-pagination">
      <form className="table__footer-pagination-form">{paginatioRender}</form>
      <Button
        className={
          "table__footer-button table__footer-button_small table__footer-button_transparent"
        }
        buttonText={"#"}
      />
    </div>
  );
};

export default FooterPagination;
