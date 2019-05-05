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
    const {classes, loadTemp} = this.props;
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <div>
              <Button className={classes.hbtn} color="inherit" onClick={() => {loadTemp('airbnb')}}>air bnb</Button>
              <Button className={classes.hbtn} color="inherit" onClick={() => {loadTemp('spotify')}}>Spotify</Button>
              <Button className={classes.hbtn} color="inherit" onClick={() => {loadTemp('basic')}}>Basic set</Button>
            </div>
            <div>
              <Button className={classes.hbtn} color="inherit">About</Button>
              <Button className={classes.hbtn} color="inherit" onClick={()=> window.open("https://github.com/ZachChang/information-architecture-tool", "_blank")} >Git hub</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(Header);
