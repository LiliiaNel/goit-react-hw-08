import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useDispatch} from "react-redux";
import { addContact } from "../../redux/contactsOps";


let contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Must contain at least 3 characters').max(50, 'Cannot exceed 50 characters').required('Please enter a name'),
  number: Yup.string().matches(/^[\d-]+$/, 'Can contain only digits and dashes').min(3, 'Must be at least 3 digits').max(50, 'Cannot exceed 50 characters').required('Please enter a phone number'),
  });


export default function ContactForm() {
  
  const dispatch = useDispatch();

  const fieldId = useId();    
  const initialValues = {
        name: "",
        number: "",
  };  

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };


    return <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
        <Form className={css.form}>
            <label htmlFor={`${ fieldId }-name`}>Name</label>
            <Field type="text" name="name" id={`${fieldId}-name`} />
            <ErrorMessage name="name" component='span' className={css.error}  />
              <label htmlFor={`${ fieldId }-number`}>Number</label>
            <Field type="text" name="number" id={`${fieldId}-number`} />
             <ErrorMessage name="number" component='span' className={css.error}  />
              <button type="submit">Add contact</button>
        </Form>
    </Formik>
};