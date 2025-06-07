import css from "./Contact.module.css";
import { IoMdPerson } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact } from "../../redux/contacts/operations";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography
} from "@mui/material";


export default function Contact({ contact }) {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleDialogOpen = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);

    const handleDeleteContact = () => {
        dispatch(deleteContact(contact.id))
    };

    return <>
        <div className={css.info}>
            <p><IoMdPerson /> {contact.name}</p>
            <p><MdLocalPhone /> {contact.number}</p>
        </div>
        <button onClick={handleDialogOpen} className={css.button}>Delete</button>
        <Dialog
            open={open}
            onClose={handleDialogClose}
            aria-labelledby="delete-dialog-title"
            aria-describedby="delete-dialog-description"
            role="alertdialog">
            <DialogTitle id="delete-dialog-title">Delete Contact</DialogTitle>
            <DialogContent>
                <Typography id="delete-dialog-description">
                    Are you sure you want to delete <strong>{contact.name}</strong>?
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDialogClose}>Cancel</Button>
                <Button onClick={handleDeleteContact} color="error" autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    </>
};