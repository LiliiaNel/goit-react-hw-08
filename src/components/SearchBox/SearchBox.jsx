import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import { FiSearch } from 'react-icons/fi';


export default function SearchBox() {
    const filterValue = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    const [value, setValue] = useState(filterValue);
    const [debouncedValue] = useDebounce(value, 500);

    useEffect(() => { dispatch(changeFilter(debouncedValue)) }, [debouncedValue, dispatch]);
    
    return (<label className={css.container}>
        <FiSearch className={css.icon} />
        <input className={css.input} type="text" value={value} placeholder={"Find contacts by name"} onChange={(e) => { setValue(e.target.value) }} />
    </label>);
    
};