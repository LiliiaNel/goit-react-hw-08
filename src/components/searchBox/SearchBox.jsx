import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";


export default function SearchBox() {
    const filterValue = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    const [value, setValue] = useState(filterValue);
    const [debouncedValue] = useDebounce(value, 500);
    console.log(debouncedValue);

    useEffect(() => { dispatch(changeFilter(debouncedValue)) }, [debouncedValue, dispatch]);
    
    return <div className={css.container}>
        <label className={css.label} htmlFor="">Find contacts by name</label>
        <input className={css.input} type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />
    </div>
    
};