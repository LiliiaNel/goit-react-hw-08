import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';

export default function ContactMenu({ onEdit, onDelete }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton
        onClick={handleOpen}
        aria-label="more actions"
        size="small"
        sx={{ color: '#abb8ce','&:hover': { color: '#4c6085' }, position: 'absolute', top: 8, right: 8 }}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem
        sx={{
            fontSize: '0.9rem',
            color: '#4c6085',
            '&:hover': {
              backgroundColor: '#22384313',
            },
          }}
          onClick={() => {
            handleClose();
            onEdit();
          } }
        >
          Edit
        </MenuItem>
        <MenuItem
            sx={{
            fontSize: '0.9rem',
            color: '#4c6085',
            '&:hover': {
                backgroundColor: '#22384313',
            },
            }}
          onClick={() => {
            handleClose();
            onDelete();
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </>
  );
}
