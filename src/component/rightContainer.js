import React from 'react'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import EditIcon from '@material-ui/icons/Edit';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  iOSSwitchBase: {
  },
  iOSBar: {
    border: 'solid 1px',
    borderColor: 'white',
    backgroundColor: 'white',
  },
  label: {
    color: 'white',
    fontSize: '16px',
    fontWeight: '100',
    letterSpacing: '1.5px',
  },
});

const RightContainer = (props) => {
  const { classes } = props;
  return (
    <div className='right-container'>
      {(() => {
        switch (props.item.type) {
          case 'p':
            return  <React.Fragment>
                      <div className='name'>
                        {props.item.name}
                        <EditIcon className='icon' onClick={props.toggleChangeName}></EditIcon>
                      </div>
                      <div className='button-container'>
                        <Button variant="outlined" className='add-button page-color' onClick={() => {props.addNode('p')}}>Add Page</Button>
                        <Button variant="outlined" className='add-button event-color' onClick={() => {props.addNode('e')}}>Add Event</Button>
                        <Button variant="outlined" className='add-button component-color' onClick={() => {props.addNode('c')}}>Add Component</Button>
                        <Button variant="outlined" className='add-button logic-color' onClick={() => {props.addNode('l')}}>Add Logic</Button>
                      </div>
                      {props.item.parent === null ? null :
                        <Button className='delete-btn' variant="contained" color="secondary" onClick={props.deleteNode}>Delete</Button>
                      }
                    </React.Fragment>
          case 'e':
            return  <React.Fragment>
                      <div className='name'>
                        {props.item.name}
                        <EditIcon className='icon' onClick={props.toggleChangeName}></EditIcon>
                      </div>
                      <div className='button-container'>
                        <Button variant="outlined" className='add-button component-color' onClick={props.connect}>Connect</Button>
                      </div>
                      {props.checkedC.length > 0 &&
                        <div>
                          <p>This event connect to :</p>
                          <List>
                            {props.checkedC.map((item,index) =>
                              <ListItem button key={index}>
                                <p className='list'>{item.name}</p>
                              </ListItem>
                            )}
                          </List>
                        </div>
                      }
                      {props.item.parent === null ? null :
                        <Button className='delete-btn' variant="contained" color="secondary" onClick={props.deleteNode}>Delete</Button>
                      }
                    </React.Fragment>
          case 'c':
            return  <React.Fragment>
                      <div className='name'>
                        {props.item.name}
                        <EditIcon className='icon' onClick={props.toggleChangeName}></EditIcon>
                      </div>
                      {props.item.parent === null ? null :
                        <Button className='delete-btn' variant="contained" color="secondary" onClick={props.deleteNode}>Delete</Button>
                      }
                    </React.Fragment>
          case 'l':
            return  <React.Fragment>
                      <div className='name'>
                        {props.item.name}
                        <EditIcon className='icon' onClick={props.toggleChangeName}></EditIcon>
                      </div>
                      <FormControlLabel
                        className='disableSwitch'
                        classes={{label: classes.label}}
                        control={
                          <Switch
                            classes={{
                              bar: classes.iOSBar,
                            }}
                            disableRipple

                            checked={!props.item.disable}
                            onChange={props.changeDisable}
                            value="checkedB"
                          />
                        }
                        label={'Logic: ' + !props.item.disable}
                      />
                      <div className='button-container'>
                        <Button variant="outlined" className='add-button page-color' onClick={() => {props.addNode('p')}}>Add Page</Button>
                        <Button variant="outlined" className='add-button event-color' onClick={() => {props.addNode('e')}}>Add Event</Button>
                        <Button variant="outlined" className='add-button component-color' onClick={() => {props.addNode('c')}}>Add Component</Button>
                      </div>
                      {props.item.parent === null ? null :
                        <Button className='delete-btn' variant="contained" color="secondary" onClick={props.deleteNode}>Delete</Button>
                      }
                    </React.Fragment>
          default:
            return  null
        }
      })()}
    </div>
  )
}

export default withStyles(styles)(RightContainer);
