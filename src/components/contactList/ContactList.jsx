import css from "./Contactlist.module.css";
import Contact from "../contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { useDebounce } from "use-debounce";
import { useMemo } from "react";

export default function ContactList() {

	const contacts = useSelector((state) => state.contacts.items);
	console.log(contacts);
	const filter = useSelector(state => state.filters.name);
	const dispatch = useDispatch();

	const handleDeleteContact = (id) => {
		dispatch(deleteContact(id));
}
	const [debouncedFilter] = useDebounce(filter, 500);
	
	const visibleContacts = useMemo(() => {
	  return contacts.filter(contact =>
		contact.name.toLowerCase().includes(debouncedFilter.toLowerCase())
	  );
	}, [contacts, debouncedFilter]);

	return (<ul className={css.container}>
		{visibleContacts.map((contact) => (<li key={contact.id} className={css.item}>
			<Contact contact={contact} deleteItem={() => handleDeleteContact(contact.id)} />
			</li>))}
	</ul>)
};