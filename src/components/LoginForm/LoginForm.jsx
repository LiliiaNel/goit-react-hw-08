import css from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";


export default function LoginForm() {
  const dispatch = useDispatch();
    let loginSchema = Yup.object().shape({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[0-9]/, "Must contain at least one number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must contain at least one special character")
      .required("Password is required"),
    });
    const fieldId = useId(); 
    const initialValues = {
        email: "",
        password: "",
  };  

  const handleSubmit = async (values, actions) => {
    dispatch(login(values)).unwrap();
    actions.resetForm();
  };

    return <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginSchema}>
        <Form className={css.form}>
            <label htmlFor={`${ fieldId }-email`}>Email</label>
            <Field type="text" name="email" id={`${fieldId}-email`} />
            <ErrorMessage name="email" component='span' className={css.error} />
            <label htmlFor={`${ fieldId }-password`}>Password</label>
            <Field type="password" name="password" id={`${fieldId}-password`} />
            <ErrorMessage name="password" component='span' className={css.error} />
            <button type="submit">Login</button>
        </Form>
    </Formik>
}