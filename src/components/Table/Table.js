import TableHeader from './TableHeader'
import TableOrdersList from './TableOrdersList';
import TableFooter from './TableFooter'

const Table = () => {
    return (
        <div className="table">
            <TableHeader />
            <TableOrdersList />
            <TableFooter />
        </div>
    )
    
}

export default Table