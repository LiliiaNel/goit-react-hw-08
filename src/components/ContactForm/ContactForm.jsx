import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector} from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import {contactSchema} from "../../validation/schemas"
import { selectContacts } from "../../redux/contacts/selectors";
import { Toaster, toast } from 'react-hot-toast';


export default function ContactForm() {
  
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const fieldId = useId();    
  const initialValues = {
        name: "",
        number: "",
  };  


  const handleSubmit = (values, actions) => {
    const nameExists = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    const numberExists = contacts.some(
      (contact) => contact.number === values.number
    );
  
    if (nameExists || numberExists) {
      toast.error("Contact already exists", { position: "bottom-left" });
      return;
    }
    dispatch(addContact(values));
    actions.resetForm();
  };

  return <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
      <Form className={css.form}>
        <div className={css.formGroup}>
            <label htmlFor={`${ fieldId }-name`}>Name</label>
            <Field type="text" name="name" id={`${fieldId}-name`} />
          <ErrorMessage name="name" component='span' className={css.error} />
        </div>
        <div className={css.formGroup}>
              <label htmlFor={`${ fieldId }-number`}>Number</label>
            <Field type="text" name="number" id={`${fieldId}-number`} />
          <ErrorMessage name="number" component='span' className={css.error} />
          </div>
              <button type="submit">Add contact</button>
        </Form>
  </Formik>
};