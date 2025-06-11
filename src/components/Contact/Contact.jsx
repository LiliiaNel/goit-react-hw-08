import css from "./Contact.module.css";
import { IoMdPerson } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import clsx from 'clsx';
import EditDialog from "../EditDialog/EditDialog";
import DeleteDialog from "../DeleteDialog/DeleteDialog";
import ContactMenu from '../ContactMenu/ContactMenu'

export default function Contact({ contact }) {
    
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [scrollField, setScrollField] = useState(null);

    const handleEditClose = () => setEditOpen(false);
    const handleDeleteClose = () => setDeleteOpen(false);

    const dispatch = useDispatch();

    const handleDeleteContact = () => {
        dispatch(deleteContact(contact.id))
    };

    const handleEditContact = (updatedData) => {
        dispatch(editContact({ contactId: contact.id, updatedData }));  
    };
    
    const handleScrollToggle = (value) => {
        if (scrollField === value) {
          setScrollField(null);
        } else {
          setScrollField(value);
        }
      };
      
    const scrollforName = clsx(css.contactText, { [css.scrollText]: scrollField === contact.name });
    
    const scrollforNumber = clsx(css.contactText, { [css.scrollText]: scrollField === contact.number});
    
    return <>
        <div className={css.info}>
            <p title={contact.name} onClick={() => handleScrollToggle(contact.name)}><IoMdPerson />
                <span className={scrollforName}>{contact.name}</span></p>
            <p title={contact.number} onClick={() => handleScrollToggle(contact.number)}><MdLocalPhone />
                <span className={scrollforNumber}>{contact.number}</span></p>
        </div>
            <ContactMenu
        onEdit={() => setEditOpen(true)}
        onDelete={() => setDeleteOpen(true)}
      />
        <EditDialog 
        open={editOpen}
        onClose={handleEditClose}
        onSave={handleEditContact}
        contact={contact}
        />
        <DeleteDialog
            open={deleteOpen}
            onClose={handleDeleteClose}
            onDelete={handleDeleteContact}
            contactName={contact.name}
        />
    </>
};