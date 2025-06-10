import css from "./Contactlist.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {

	const visibleContacts = useSelector(selectFilteredContacts);

	if (visibleContacts.length === 0) {
		return <p className={css.noContacts}>No contacts found</p>;
	  }
	
	return (<ul className={css.container}>
		{visibleContacts.map((contact) => (<li key={contact.id} className={css.item}>
			<Contact contact={contact} />
			</li>))}
	</ul>)
};