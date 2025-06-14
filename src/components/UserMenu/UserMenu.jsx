import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
    const dispatch = useDispatch();

    const handleLogOut = async () =>{
        dispatch(logout()).unwrap();
    };

    const user = useSelector(selectUser);
    return <div className={css.container}>
        <p className={css.username}>Wellcome, {user.name}</p>
        <button className={css.logoutBtn} type="button" onClick={handleLogOut}>Logout</button>
    </div>
}