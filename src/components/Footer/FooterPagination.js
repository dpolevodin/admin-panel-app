import Button from "../Common/Button";
import { PageDropdown } from "./PageDropdown/PageDropdown";

const primaryClass = "table__footer-button table__footer-button_small";
const secondaryClass =
  "table__footer-button table__footer-button_small table__footer-button_transparent";
const thirdClass =
  "table__footer-button table__footer-button_small table__footer-button_transparent";

export const FooterPagination = ({
  onClick,
  page,
  maxPage,
  onClickLast,
  onSubmit,
  isVisible,
}) => {
  let currentPage = Number(page);
  const firstButtonValue =
    currentPage === maxPage && currentPage !== 1
      ? currentPage - 1
      : currentPage;
  const secondButtonValue =
    currentPage + 1 <= maxPage ? currentPage + 1 : currentPage;
  const thirdButtonValue = currentPage + 2;

  const firstButtonClass =
    page < maxPage || page === maxPage ? primaryClass : secondaryClass;
  const secondButtonClass = page >= maxPage ? primaryClass : secondaryClass;

  const lastPageButton = (
    <>
      <span className="table__pagination-continue">…</span>
      <Button className={secondaryClass} onClick={onClick}>
        {maxPage}
      </Button>
    </>
  );

  return (
    <div className="table__footer-pagination">
      <Button className={firstButtonClass} onClick={onClick}>
        {firstButtonValue}
      </Button>

      {maxPage !== 1 && (
        <Button className={secondButtonClass} onClick={onClick}>
          {secondButtonValue}
        </Button>
      )}

      {thirdButtonValue <= maxPage && (
        <Button className={secondaryClass} onClick={onClick}>
          {thirdButtonValue}
        </Button>
      )}
      {maxPage > 3 && page <= maxPage && lastPageButton}

      <Button className={thirdClass} onClick={onClickLast}>
        #
      </Button>
      <PageDropdown isVisible={isVisible} onSubmit={onSubmit} />
    </div>
  );
};
