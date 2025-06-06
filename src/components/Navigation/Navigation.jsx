import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from 'clsx';
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
    
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const buildLinkClass = ({ isActive }) => clsx(css.navLink, { [css.activeLink]: isActive });
    
    return <div className={css.navWrapper}>
        <nav className={css.nav}>
            <NavLink to="/" className={buildLinkClass}>Home</NavLink>
            {isLoggedIn && <NavLink to="/contacts" className={buildLinkClass}>Contacts</NavLink>}
        </nav>
    </div>
}