import css from './DeleteDialog.module.css';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography
} from "@mui/material";

export default function DeleteDialog({ open, onClose, onDelete, contactName }) {
    return  <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="delete-dialog-title"
            aria-describedby="delete-dialog-description"
            role="alertdialog">
            <DialogTitle id="delete-dialog-title">Delete Contact</DialogTitle>
            <DialogContent>
                <Typography id="delete-dialog-description">
                    Are you sure you want to delete <strong>{contactName}</strong>?
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} className={css.cancelBtn}>Cancel</Button>
                <Button onClick={onDelete} color="error" autoFocus className={css.deleteBtn}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
}