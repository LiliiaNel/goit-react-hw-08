import css from "./RegistrationPage.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function RegistrationPage () {
    return <div className={css.page}>
         <h1 className={css.title}>Create an account</h1>
        <RegistrationForm />
    </div>
}