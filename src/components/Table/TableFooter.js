import FooterActions from '../Footer/FooterActions'
import FooterPagination from '../Footer/FooterPagination'


const TableFooter = ({
    className = "table__footer"
}) => {
    return (
        <div className={className}>
            <FooterActions />
            <FooterPagination />
        </div>
    )
}

export default TableFooter