import css from'./App.module.css'
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';
import ContactList from './components/contactList/ContactList';
import Loader from './components/loader/Loader';
import ErrorMessage from './components/errorMessage/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { selectLoading, selectError } from './redux/contactsSlice';
import { Toaster, toast } from 'react-hot-toast';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    let ignore = false;
  
    async function loadContacts() {
      try {
        await dispatch(fetchContacts()).unwrap();
        if (!ignore) toast.success("Contacts loaded");
      } catch {
        if (!ignore) toast.error("Failed to load contacts");
      }
    }
    loadContacts();
    return () => {
      ignore = true;
    };
  }, [dispatch]);


  return (
    <div>
      <h1 className={css.title}>Contact Book</h1>
      <div className={css.wrapper}>
        <div className={css.content}>
          <ContactForm />
          <SearchBox />
        </div>
        <div className={css.contactContent}>
          {loading && <Loader />}
          {error && <ErrorMessage />}
          {!loading && !error && <ContactList />}
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
}

export default App
