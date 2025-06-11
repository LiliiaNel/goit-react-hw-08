import css from "./HomePage.module.css";
import clsx from 'clsx';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import { FiUserPlus, FiEdit3, FiTrash2, FiSearch } from 'react-icons/fi';



export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.page}>
    <div className={css.container}>
        <h1 className={css.title}>Welcome to Contacts Book </h1>
        {isLoggedIn ? (<>
          <p className={css.description}> You're successfully logged in.</p>
          <p className={css.description}>Head over to the <Link to="/contacts" className={css.link}>Contacts</Link> page to view or manage your entries.</p>
          <ul className={css.descrList}>
            <li><FiUserPlus /> <strong>Add</strong> new contacts with just a few clicks</li>
            <li><FiEdit3 /> <strong>Edit</strong> existing contact details anytime</li>
            <li><FiTrash2 /> <strong>Delete</strong> entries you no longer need</li>
            <li><FiSearch /> <strong>Search</strong> and filter to find contacts</li>
        </ul>   
          </>) : (<><p className={css.description}>
        Log in to manage your contacts — add, edit, and keep everything organized in one place.
      </p>
      <div className={css.buttonGroup}>
        <Link to="/login" className={clsx(css.button, css.primary)}>Log In</Link>
        <Link to="/register" className={clsx(css.button, css.outline)}>Register</Link>
      </div></>)} 
      </div>
      </div>
  );
}
