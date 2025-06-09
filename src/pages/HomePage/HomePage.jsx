import css from "./HomePage.module.css";
import clsx from 'clsx';
import { Link } from 'react-router-dom';


export default function HomePage() {

  return (
    <div className={css.page}>
    <div className={css.container}>
        <h1 className={css.title}>Welcome to Contacts Book </h1>
      <p className={css.description}>
        Log in to manage your contacts — add, edit, and keep everything organized in one place.
      </p>
      <div className={css.buttonGroup}>
        <Link to="/login" className={clsx(css.button, css.primary)}>Log In</Link>
        <Link to="/register" className={clsx(css.button, css.outline)}>Register</Link>
      </div>
      </div>
      </div>
  );
}
