import FooterActions from "../Footer/FooterActions";
import FooterPagination from "../Footer/FooterPagination";

export const TableFooter = ({ className, onClick }) => {
  const blockClass = className ? className : "table__footer";
  return (
    <div className={blockClass}>
      <FooterActions />
      <FooterPagination onClick={onClick}/>
    </div>
  );
};
