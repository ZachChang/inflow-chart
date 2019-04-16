import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const ConnectModal = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {props.alert
        ?
        <React.Fragment>
          <DialogTitle id="alert-dialog-title">You don't have any component to be connected. Please add at least one "component".</DialogTitle>
          <DialogActions>
            <Button onClick={props.handleClose} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </React.Fragment>
        :
        <React.Fragment>
          <DialogTitle id="alert-dialog-title">Choose a component to be connected to this event.</DialogTitle>
          <DialogContent>
            <List>
              {props.components.map((item, index) => (
                <ListItem key={index} role={undefined} dense button onClick={() => {props.toggleCheck(item)}}>
                  <Checkbox
                    checked={props.checked.indexOf(item.name) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText>{item.name}</ListItemText>
                </ListItem>
              ))}
            </List>
          </DialogContent>
          <DialogActions>
          <Button onClick={props.handleClose} color="primary" autoFocus>
            close
          </Button>
          </DialogActions>
        </React.Fragment>
      }
    </Dialog>
  )
}

export default ConnectModal;
