import FooterActions from "../Footer/FooterActions";
import FooterPagination from "../Footer/FooterPagination";

export const TableFooter = ({ className, onClick, page, maxPage, onClickLast}) => {
  const blockClass = className ? className : "table__footer";
  return (
    <div className={blockClass}>
      <FooterActions />
      <FooterPagination onClick={onClick} page={page} maxPage={maxPage} onClickLast={onClickLast}/>
    </div>
  );
};
