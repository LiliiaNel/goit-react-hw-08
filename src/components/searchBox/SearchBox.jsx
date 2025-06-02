import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";


export default function SearchBox() {
    const filterValue = useSelector(selectNameFilter);
    const dispatch = useDispatch();
    const onFilter = (event) => {
      dispatch(changeFilter(event.target.value));
  };

    
    return <div className={css.container}>
        <label className={css.label} htmlFor="">Find contacts by name</label>
        <input className={css.input} type="text" value={filterValue} onChange={onFilter} />
    </div>
    
};