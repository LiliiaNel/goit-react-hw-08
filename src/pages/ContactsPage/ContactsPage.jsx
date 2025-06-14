import css from "./ContactsPage.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectLoading, selectError, selectContacts } from '../../redux/contacts/selectors';

import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import { Toaster, toast } from 'react-hot-toast';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    let ignore = false;
  
    async function loadContacts() {
      try {
        await dispatch(fetchContacts()).unwrap();
        
      } catch {
        if (!ignore) toast.error("Failed to load contacts");
      }
    }
    loadContacts();
    return () => {
      ignore = true
    };

  }, [dispatch]);

  const hasContacts = !loading && !error && contacts?.length > 0;
  
  return <div className={css.page}>
        <ContactForm />
    <div className={css.contactContent}>
        {hasContacts && <SearchBox />}
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {!loading && !error && <ContactList />}
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
}