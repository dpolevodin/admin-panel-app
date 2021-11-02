import Button from '../components/Button';
import DateFilter from '../components/DateFilter';
import StatusFilter from '../components/StatusFilter';
import SumOrderFilter from '../components/SumOrderFilter';

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