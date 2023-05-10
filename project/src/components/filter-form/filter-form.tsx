import FilterByLevel from '../filter-by-level/filter-by-level';
import FilterByType from '../filter-by-type/filter-by-type';

function FilterForm(): JSX.Element {
  return (
    <form className="filter" action="#" method="get">
      <FilterByType />
      <FilterByLevel />
    </form>
  );
}

export default FilterForm;
