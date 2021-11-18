import Button from "../Common/Button";
import Searchbar from "../Common/Searchbar";
import Loader from "../Common/Loader";
import { useState } from "react";

const FilterPrimary = ({
  buttonFiltersHandler,
  buttonResetFiltersHandler
}) => {
  const [loaderVisible, setLoaderVisible] = useState(true)

  const showLoader = () => {
    return setTimeout(() => {
      setLoaderVisible(false)
    }, 2000)
  }

  showLoader()

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
        {loaderVisible && (<Loader isVisible />)}
      </div>
    </div>
  );
}

export default FilterPrimary;
