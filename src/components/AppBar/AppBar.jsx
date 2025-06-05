import css from "./AppBar.module.css";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenue from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";


export default function AppBar() {
    
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return <header className={css.header}>
        <Navigation />
        {isLoggedIn? <UserMenue /> : <AuthNav />}
    </header>
}