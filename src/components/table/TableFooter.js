import FooterActions from '../footer/FooterActions'
import FooterPagination from '../footer/FooterPagination'
import FooterDropdown from '../footer/FooterDropdown'


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