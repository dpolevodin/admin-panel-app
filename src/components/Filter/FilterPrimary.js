import Button from "../Common/Button";
import Searchbar from "../Common/Searchbar";
import Loader from "../Common/Loader";
import { useState } from "react";

const FilterPrimary = ({
  buttonFiltersHandler,
  resetFiltersHandler,
  onSubmit,
  onChange,
  onClick,
  value
}) => {
  const [loaderVisible, setLoaderVisible] = useState(true);

  const showLoader = () => {
    return setTimeout(() => {
      setLoaderVisible(false);
    }, 3000);
  };

  showLoader();
  clearTimeout(showLoader)

  return (
    <div className="filter__wrapper">
      <div className="filter__group">
        <form className="filter__form" onSubmit={onSubmit} onChange={onChange}>
          <Searchbar
            labelClass="filter__searchbar-group"
            wrapperClass="filter__searchbar-field filter__searchbar-field_empty"
            inputAreaClass="filter__searchbar-search-area"
            onClick={onClick}
            value={value}
          />
          <Button
            className="filter-button"
            svgName="filter"
            onClick={buttonFiltersHandler}
          >
            Фильтры
          </Button>
          <Button
            className="filter-button filter-button_hidden-icon"
            svgName="filter"
            buttonText="Сбросить фильтры"
            onClick={resetFiltersHandler}
          >
            Сбросить фильтры
          </Button>
        </form>
        {loaderVisible && <Loader isVisible />}
      </div>
    </div>
  );
};

export default FilterPrimary;
