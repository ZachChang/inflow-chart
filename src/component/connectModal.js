import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

class ConnectModal extends Component {
  state = {
   value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { open, handleClose, components, logics, checkedCId, checkedLId,toggleCheck } = this.props;
    const { value } = this.state;

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <React.Fragment>
          <DialogTitle id="alert-dialog-title">Click the item to be connected to this event.</DialogTitle>
          <DialogContent>
            <AppBar position="static">
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label="Component" />
                <Tab label="Logic" />
              </Tabs>
            </AppBar>
            {value === 0 &&
              <React.Fragment>
                {components.length > 0 ?
                  <List>
                    {components.map((item, index) => (
                      <ListItem key={index} role={undefined} dense button onClick={() => {toggleCheck(item, 'component')}}>
                        <Checkbox
                          checked={checkedCId.indexOf(item.id) !== -1}
                          tabIndex={-1}
                          disableRipple
                        />
                        <ListItemText>{item.name}</ListItemText>
                      </ListItem>
                    ))}
                  </List> :
                  <div>
                    <p>Please at least add one Component to be connect. You can add Component in "Page" block.</p>
                  </div>
                }
              </React.Fragment>
            }
            {value === 1 &&
              <React.Fragment>
                {logics.length > 0 ?
                  <List>
                    {logics.map((item, index) => (
                      <ListItem key={index} role={undefined} dense button onClick={() => {toggleCheck(item, 'logic')}}>
                        <Checkbox
                          checked={checkedLId.indexOf(item.id) !== -1}
                          tabIndex={-1}
                          disableRipple
                        />
                        <ListItemText>{item.name}</ListItemText>
                      </ListItem>
                    ))}
                  </List> :
                  <div>
                    <p>Please at least add one Decision to be connect. You can add Decision in "Page" block.</p>
                  </div>
                }
              </React.Fragment>
            }
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            close
          </Button>
          </DialogActions>
        </React.Fragment>
      </Dialog>
    );
  }
}

export default ConnectModal;
