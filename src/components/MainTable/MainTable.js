import { PageHeader } from "../Header/PageHeader"
import { OrdersFilter } from '../Filter/OrdersFilter'
import { OrdersTable } from '../Table/OrdersTable'
import { SvgSprite } from '../Icons/SvgSprite';

export const MainTable = () => {
    return (
        <div className="main-wrapper">
            <PageHeader />
            <OrdersFilter />
            <OrdersTable />
            <SvgSprite />
        </div>
    )
}
