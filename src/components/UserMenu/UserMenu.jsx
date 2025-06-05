import { useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";

export default function UserMenu() {
    const user = useSelector(selectUser);
    return <div>
        <p>Wellcome, {user.name}</p>
        <button type="button">Logout</button>
    </div>
}