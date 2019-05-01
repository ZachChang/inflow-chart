import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const styles= {
  toolbar: {
    minHeight: '40px',
    justifyContent: 'space-between',
    paddingRight: '50px',
    paddingLeft: '50px'
  },
  hbtn: {
    paddingLeft: '30px',
    paddingRight: '30px',
  }
}

class Header extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <div>
              <Button className={classes.hbtn} color="inherit">air bnb</Button>
              <Button className={classes.hbtn} color="inherit">Spotify</Button>
              <Button className={classes.hbtn} color="inherit">Youtube</Button>
              <Button className={classes.hbtn} color="inherit">Basic set</Button>
            </div>
            <div>
              <Button className={classes.hbtn} color="inherit">About</Button>
              <Button className={classes.hbtn} color="inherit">Git hub</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(Header);
