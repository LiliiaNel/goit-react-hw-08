import css from "./Contactlist.module.css";
import Contact from "../contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { useDebounce } from "use-debounce";
import { useMemo } from "react";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from '../../redux/filtersSlice'

export default function ContactList() {

	const contacts = useSelector(selectContacts);
	const filter = useSelector(selectNameFilter);
	const dispatch = useDispatch();
	
	const [debouncedFilter] = useDebounce(filter, 500);
	
	const visibleContacts = useMemo(() => {
	  return contacts.filter(contact =>
		contact.name.toLowerCase().includes(debouncedFilter.toLowerCase())
	  );
	}, [contacts, debouncedFilter]);

	return (<ul className={css.container}>
		{visibleContacts.map((contact) => (<li key={contact.id} className={css.item}>
			<Contact contact={contact} />
			</li>))}
	</ul>)
};