import css from "./Contact.module.css";
import { IoMdPerson } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
    const dispatch = useDispatch();
    const handleDeleteContact = () => {
        dispatch(deleteContact(contact.id))
    };

    return <>
        <div className={css.info}>
            <p><IoMdPerson /> {contact.name}</p>
            <p><MdLocalPhone /> {contact.number}</p>
        </div>
        <button className={css.button} type="button" onClick={handleDeleteContact}>Delete</button>
    </>
};