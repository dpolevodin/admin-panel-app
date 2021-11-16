import Button from '../Common/Button';
import DateFilter from '../Filter/DateFilter';
import StatusFilter from '../Filter/StatusFilter';
import SumOrderFilter from '../Filter/SumOrderFilter';

function FilterOptions() {
    return (
        <div className="filter__wrapper">
                    <form className="filter__form">
                        <DateFilter />
                        <StatusFilter />
                        <SumOrderFilter />
                        <Button className="filter-button filter-button_hidden-icon filter-button_short" buttonText="Применить" />
                    </form>
                </div>
    )
}

export default FilterOptions;