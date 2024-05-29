import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterVal = useSelector(selectNameFilter);

  const handleFilter = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div>
      <label> Find contact by name:</label>
      <input
        type="text"
        name="filter"
        placeholder="Enter name to filter"
        value={filterVal}
        onChange={handleFilter}
      />
    </div>
  );
}