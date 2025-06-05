import css from "./RegistrationForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {

    const dispatch = useDispatch();

    let contactSchema = Yup.object().shape({
      username: Yup.string().min(3, 'Must contain at least 3 characters').max(50, 'Cannot exceed 50 characters').required('Please enter a name'),
    });
    
    const fieldId = useId(); 
    const initialValues = {
        username: "",
        email: "",
        password: "",
  };  

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

    return <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
        <Form className={css.form}>
            <label htmlFor={`${ fieldId }-username`}>Username</label>
            <Field type="text" name="username" id={`${fieldId}-username`} />
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