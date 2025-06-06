import css from "./RegistrationForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {

    const dispatch = useDispatch();

    let registrationSchema = Yup.object().shape({
      name: Yup.string().min(3, 'Must contain at least 3 characters')
        .max(50, 'Cannot exceed 50 characters').required('Please enter a name'),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[0-9]/, "Must contain at least one number")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must contain at least one special character")
        .required("Password is required"),
    });
    
    const fieldId = useId(); 
    const initialValues = {
        name: "",
        email: "",
        password: "",
  };  

  const handleSubmit = async (values, actions) => {
    dispatch(register(values)).unwrap();
    actions.resetForm();
  };

    return <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={registrationSchema}>
        <Form className={css.form}>
            <label htmlFor={`${ fieldId }-name`}>Username</label>
            <Field type="text" name="name" id={`${fieldId}-name`} />
            <ErrorMessage name="name" component='span' className={css.error} />
            <label htmlFor={`${ fieldId }-email`}>Email</label>
            <Field type="text" name="email" id={`${fieldId}-email`} />
            <ErrorMessage name="email" component='span' className={css.error} />
            <label htmlFor={`${ fieldId }-password`}>Password</label>
            <Field type="password" name="password" id={`${fieldId}-password`} />
            <ErrorMessage name="password" component='span' className={css.error} />
            <button type="submit">Register</button>
        </Form>
    </Formik>
}