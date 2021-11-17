import FooterActions from '../Footer/FooterActions'
import FooterPagination from '../Footer/FooterPagination'


const TableFooter = () => {
    return (
        <div className="table__footer">
            <FooterActions />
            <FooterPagination />
        </div>
    )
}

export default TableFooter