import React from 'react'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const RightContainer = (props) => {
  return (
    <div className='right-container'>
      {(() => {
        switch (props.item.type) {
          case 'p':
            return  <React.Fragment>
                      <div>name: {props.item.name}</div>
                      <div className='button-container'>
                        <Button className='add-button page-color' onClick={() => {props.addNode('p')}}>Add Page</Button>
                        <Button className='add-button event-color' onClick={() => {props.addNode('e')}}>Add Event</Button>
                        <Button className='add-button component-color' onClick={() => {props.addNode('c')}}>Add Component</Button>
                      </div>
                      {props.item.parent === null ? null :
                        <Button variant="contained" color="secondary" onClick={props.deleteNode}>Delete</Button>
                      }
                    </React.Fragment>
          case 'e':
            return  <React.Fragment>
                      <div>name: {props.item.name}</div>
                      <div className='button-container'>
                        <Button className='add-button component-color' onClick={props.connect}>Connect</Button>
                      </div>
                      {props.checkedC.length > 0 &&
                        <div>
                          <p>This event connect to :</p>
                          <List>
                            {props.checkedC.map((item,index) =>
                              <ListItem button key={index}>
                                <ListItemText primary={item} />
                              </ListItem>
                            )}
                          </List>
                        </div>
                      }
                      {props.item.parent === null ? null :
                        <Button variant="contained" color="secondary" onClick={props.deleteNode}>Delete</Button>
                      }
                    </React.Fragment>
          case 'c':
            return  <React.Fragment>
                      <div>name: {props.item.name}</div>
                      <div className='button-container'>
                        <Button className='add-button page-color' onClick={() => {props.addNode('p')}}>Add Page</Button>
                        <Button className='add-button event-color' onClick={() => {props.addNode('e')}}>Add Event</Button>
                        <Button className='add-button component-color' onClick={() => {props.addNode('c')}}>Add Component</Button>
                      </div>
                      {props.item.parent === null ? null :
                        <Button variant="contained" color="secondary" onClick={props.deleteNode}>Delete</Button>
                      }
                    </React.Fragment>
          default:
            return  null
        }
      })()}
    </div>
  )
}

export default RightContainer;
