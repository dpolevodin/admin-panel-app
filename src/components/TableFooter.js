import FooterActions from '../components/FooterActions'
import FooterPagination from '../components/FooterPagination'
import FooterDropdown from '../components/FooterDropdown'


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