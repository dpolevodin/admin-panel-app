import FooterActions from '../Footer/FooterActions'
import FooterPagination from '../Footer/FooterPagination'
import FooterDropdown from '../Footer/FooterDropdown'


function TableFooter() {
    return (
        <div className="table__footer">
            <FooterActions />
            <FooterDropdown />
            <FooterPagination />
        </div>
    )
}

export default TableFooter