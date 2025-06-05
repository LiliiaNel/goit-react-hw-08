import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";

export default function AppBar() {
    return <div>
        <Navigation />
        <AuthNav/>
    </div>
}