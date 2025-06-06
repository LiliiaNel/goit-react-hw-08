import css from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginPage () {
    return <div className={css.page}>
         <h1 className={css.title}>Log in to your account</h1>
        <LoginForm />
    </div>
}