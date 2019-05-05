import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const EditMessageModal = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <React.Fragment>
        <DialogTitle id="alert-dialog-title">Edit the information from this event</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-name"
            label="Information"
            value={props.message}
            onChange={props.changeMessage}
            margin="normal"
            variant="outlined"
            fullWidth={true}
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

export default EditMessageModal;
