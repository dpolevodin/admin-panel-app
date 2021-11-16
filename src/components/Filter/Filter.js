import FilterPrimary from "./FilterPrimary";
import FilterOptions from "./FilterOptions";

const Filter = ({ className = "filter" }) => {
  return (
    <div className={className}>
      <FilterPrimary />
      <FilterOptions isVisible />
    </div>
  );
};

export default Filter;
