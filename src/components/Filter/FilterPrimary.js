import Button from "../Common/Button";
import Searchbar from "../Common/Searchbar";
import Loader from "../Common/Loader";

const FilterPrimary = ({
  buttonFiltersHandler,
  buttonResetFiltersHandler
}) => {
  return (
    <div className="filter__wrapper">
      <div className="filter__group">
        <form className="filter__form">
          <Searchbar
            labelClass="filter__searchbar-group"
            wrapperClass="filter__searchbar-field filter__searchbar-field_empty"
            inputAreaClass="filter__searchbar-search-area"
          />
          <Button
            className="filter-button"
            svgName="filter"
            buttonText="Фильтры"
            onClick={buttonFiltersHandler}
          />
          <Button
            className="filter-button filter-button_hidden-icon"
            svgName="filter"
            buttonText="Сбросить фильтры"
            onClick={buttonResetFiltersHandler}
          />
        </form>
        <Loader isVisible />
      </div>
    </div>
  );
}

export default FilterPrimary;
