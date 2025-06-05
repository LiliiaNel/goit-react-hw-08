import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from 'clsx';

export default function Navigation() {
    const buildLinkClass = ({ isActive }) => clsx(css.navLink, { [css.activeLink]: isActive });
    
    return <div>
        <nav>
            <NavLink to="/" className={buildLinkClass}>Home</NavLink>
            <NavLink to="/contacts" className={buildLinkClass}>Contacts</NavLink>
            <NavLink to="/register" className={buildLinkClass}>Register</NavLink>
            <NavLink to="/login" className={buildLinkClass}>LogIn</NavLink>
        </nav>
    </div>
}