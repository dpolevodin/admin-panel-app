import FilterPrimary from "./FilterPrimary";
import FilterOptions from "./FilterOptions";
import { useState } from "react";


const Filter = ({ className = "filter" }) => {
  const [optionsVision, setOptionsVision] = useState(false)

  const handleOptionsVisible = (event) => {
    event.preventDefault();
    optionsVision ? setOptionsVision(false) : setOptionsVision(true)
  } 

  return (
    <div className={className}>
      <FilterPrimary buttonFiltersHandler={handleOptionsVisible}/>
      <FilterOptions isVisible={optionsVision} />
    </div>
  );
}

export default Filter;
