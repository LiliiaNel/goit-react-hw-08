import css from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import { login } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { loginSchema } from '../../validation/schemas';
import { selectAuthError, selectAuthLoading } from "../../redux/auth/selectors";
import { SyncLoader} from "react-spinners";
import Alert from '@mui/material/Alert';

export default function LoginForm() {
  const dispatch = useDispatch();

  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  
    const fieldId = useId(); 
    const initialValues = {
        email: "",
        password: "",
  };  

  const handleSubmit = async (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

    return <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginSchema}>
      <Form className={css.form}>
      {error && (
          <Alert severity="error" sx={{ mb: 2, fontWeight: 'medium', textAlign: 'center' }}>
            {error}
          </Alert>
        )}
        <div className={css.formGroup}>
            <label htmlFor={`${ fieldId }-email`}>Email</label>
            <Field type="email" name="email" id={`${fieldId}-email`} />
          <ErrorMessage name="email" component='span' className={css.error} />
        </div>
        <div className={css.formGroup}>
            <label htmlFor={`${ fieldId }-password`}>Password</label>
            <Field type="password" name="password" id={`${fieldId}-password`} />
          <ErrorMessage name="password" component='span' className={css.error} />
          </div>
            <button type="submit" disabled={loading}>{loading ? <SyncLoader /> : "Login"}</button>
        </Form>
    </Formik>
}