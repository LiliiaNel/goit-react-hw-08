import css from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";


export default function LoginForm() {
  const dispatch = useDispatch();
    let contactSchema = Yup.object().shape({
      email: Yup.string().min(3, 'Must contain at least 3 characters').max(50, 'Cannot exceed 50 characters').required('Please enter a name'),
    });
    const fieldId = useId(); 
    const initialValues = {
        email: "",
        password: "",
  };  

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

    return <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
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