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

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts()
      .unwrap()
      .then()
      .catch());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <h1>Contacts List</h1>
      <div className={css.content}>
        <ContactForm />
      <div>
          <SearchBox />
          {loading && <Loader />}
          {error && <ErrorMessage />}
        <ContactList />
        </div>
        </div>
    </div>
  );
}

export default App
