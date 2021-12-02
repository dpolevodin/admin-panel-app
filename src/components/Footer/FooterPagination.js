import Button from "../Common/Button";

const primaryClass = "table__footer-button table__footer-button_small";
const secondaryClass =
  "table__footer-button table__footer-button_small table__footer-button_transparent";
const thirdClass =
  "table__footer-button table__footer-button_small table__footer-button_transparent";

const FooterPagination = ({ onClick, page, maxPage, onClickLast }) => {
  let currentPage = Number(page);
  const firstButtonValue = currentPage === maxPage && currentPage !== 1 ? currentPage -1 : currentPage;
  const secondButtonValue = currentPage + 1 <= maxPage ? currentPage + 1 : currentPage;
  const thirdButtonValue = currentPage + 2;

  const firstButtonClass = page < maxPage ? primaryClass : secondaryClass
  const secondButtonClass = page >= maxPage ? primaryClass : secondaryClass

  return (
    <div className="table__footer-pagination">
      <Button className={firstButtonClass} onClick={onClick}>
        {firstButtonValue}
      </Button>

      {maxPage !==1 && <Button className={secondButtonClass} onClick={onClick}>
        {secondButtonValue}
      </Button>}

      {thirdButtonValue <= maxPage && (
        <Button className={secondaryClass} onClick={onClick}>
          {thirdButtonValue}
        </Button>
      )}

      <span className="table__pagination-continue">…</span>
      <Button className={thirdClass} onClick={onClickLast}>#</Button>
    </div>
  );
};

export default FooterPagination;
