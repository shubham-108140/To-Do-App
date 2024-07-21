// Alert.jsx
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

const Alert = ({ open, onClose, item, setToDos }) => {
  const handleDelete = () => {
    setToDos((prevToDoState) =>
      prevToDoState.filter((todo) => todo.id !== item.id)
    );
    onClose(); // Close the dialog after deletion
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Task?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete? Task: {item.title} will be deleted!!!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          No
        </Button>
        <Button onClick={handleDelete} color="primary" autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Alert;
