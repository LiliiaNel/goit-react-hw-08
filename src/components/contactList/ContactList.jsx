import css from "./Contactlist.module.css";
import Contact from "../contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {

	const visibleContacts = useSelector(selectFilteredContacts);
	
	return (<ul className={css.container}>
		{visibleContacts.map((contact) => (<li key={contact.id} className={css.item}>
			<Contact contact={contact} />
			</li>))}
	</ul>)
};