import css from "./RegistrationForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { registrationSchema } from "../../validation/schemas";
import { selectAuthError, selectAuthLoading } from "../../redux/auth/selectors";
import { SyncLoader} from "react-spinners";
import Alert from '@mui/material/Alert';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

    const fieldId = useId(); 
    const initialValues = {
        name: "",
        email: "",
        password: "",
  };  

  const handleSubmit = async (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

    return <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={registrationSchema}>
      <Form className={css.form}>
        {error && (
          <Alert severity="error" sx={{ mb: 2, fontWeight: 'medium', textAlign: 'center' }}>
            {error}
          </Alert>
        )}<div className={css.formGroup}>
            <label htmlFor={`${ fieldId }-name`}>Username</label>
            <Field type="text" name="name" id={`${fieldId}-name`} />
          <ErrorMessage name="name" component='span' className={css.error} />
        </div>
          <div className={css.formGroup}>
            <label htmlFor={`${ fieldId }-email`}>Email</label>
            <Field type="text" name="email" id={`${fieldId}-email`} />
            <ErrorMessage name="email" component='span' className={css.error} />
         </div>
          <div className={css.formGroup}>
            <label htmlFor={`${ fieldId }-password`}>Password</label>
            <Field type="password" name="password" id={`${fieldId}-password`} />
          <ErrorMessage name="password" component='span' className={css.error} />
        </div>
            <button type="submit" disabled={loading}>{loading ? <SyncLoader /> : "Register"}</button>
        </Form>
  </Formik>
}