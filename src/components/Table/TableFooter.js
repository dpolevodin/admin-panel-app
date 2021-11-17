import FooterActions from '../Footer/FooterActions'
import FooterPagination from '../Footer/FooterPagination'


function TableFooter() {
    return (
        <div className="table__footer">
            <FooterActions />
            <FooterPagination />
        </div>
    )
}

export default TableFooter