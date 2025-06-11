import css from './EditDialog.module.css';
import * as Yup from "yup";
import { contactSchema } from '../../validation/schemas.js'
import {  useEffect, useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material";
import clsx from 'clsx';
import toast from 'react-hot-toast';

export default function EditDialog({ open, onClose, onSave, contact }) {
    
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    useEffect(() => {
      if (contact && open) {
        setName(contact.name);
        setNumber(contact.number);
      }
    }, [contact, open]);
  
  const handleSave = async () => {
    try {
      await contactSchema.validate({ name, number }, { abortEarly: false });
      onSave({ name, number });
      onClose();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorCase = error.inner;
        errorCase.forEach(err => {
          toast.error(err.message);
        });
      }
    }
    };
  
    return <Dialog open={open} onClose={onClose}>
    <DialogTitle>Edit Contact</DialogTitle>
    <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 300 }}>
        <input
        value={name}
        className={css.input}
                placeholder="Name"
                onChange={e => setName(e.target.value)}
        />
        <input
         value={number}
        className={css.input}
                placeholder="Phone number"
                onChange={e => setNumber(e.target.value)}
        />
    </DialogContent>
    <DialogActions>
    <Button onClick={onClose} className={clsx(css.customButton, css.cancelBtn)}>Cancel</Button>
    <Button variant="contained" onClick={handleSave} className={clsx(css.customButton, css.saveBtn)}>Save</Button>
    </DialogActions>
</Dialog>

} 