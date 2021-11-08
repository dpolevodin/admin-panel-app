import Button from '../global/Button';
import Searchbar from '../global/Searchbar';
import Loader from '../global/Loader';


function FilterPrimary() {
    return (
        <div className="filter__wrapper">
            <div className="filter__group">
                <form className="filter__form">
                    <Searchbar 
                        labelClass="filter__searchbar-group" 
                        wrapperClass="filter__searchbar-field filter__searchbar-field_empty"
                        inputAreaClass="filter__searchbar-search-area"
                    />
                    <Button className="filter-button" svgName="filter" buttonText="Фильтры" />
                    <Button className="filter-button filter-button_hidden-icon" svgName="filter" buttonText="Сбросить фильтры" />
                </form>
                <Loader />
            </div>
        </div>
    )
}

export default FilterPrimary;