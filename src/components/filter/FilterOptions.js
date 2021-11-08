import Button from '../global/Button';
import DateFilter from '../filter/DateFilter';
import StatusFilter from '../filter/StatusFilter';
import SumOrderFilter from '../filter/SumOrderFilter';

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