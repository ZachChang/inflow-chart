import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const EditNameModal = (props) => {
  const type = props.type === 'p' ? 'page' : props.type === 'e' ? 'event' : 'component';
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <React.Fragment>
        <DialogTitle id="alert-dialog-title">Rename this {type}</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-name"
            label="Name"
            value={props.name}
            onChange={props.changeName}
            margin="normal"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>
            Ok
          </Button>
        </DialogActions>
      </React.Fragment>
    </Dialog>
  )
}

export default EditNameModal;
