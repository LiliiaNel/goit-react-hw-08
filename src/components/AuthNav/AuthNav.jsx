import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from 'clsx';

export default function AuthNav() {
     const buildLinkClass = ({ isActive }) => clsx(css.navLink, { [css.activeLink]: isActive });
    return <div className={css.container}>
        <NavLink to="/register" className={buildLinkClass}>Register</NavLink>
        <NavLink to="/login" className={buildLinkClass}>LogIn</NavLink>
    </div>
}