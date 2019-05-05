import React, { Component } from 'react';
import Header from './header';
import PropTypes from 'prop-types';
import RightContainer from './rightContainer';
import LeftContainer from './leftContainer';
import ConnectModal from './connectModal';
import EditNameModal from './editNameModal';
import EditMessageModal from './editMessageModal';
import Cookies from 'js-cookie';
import { spotifySet } from '../example/spotify';
import { airbnbSet } from '../example/airbnb';
import { basicSet } from '../example/basic';

const spotify = spotifySet;
const airbnb = airbnbSet;
const baisc = basicSet;

class Main extends Component {
  constructor() {
    super();
    this.addNode = this.addNode.bind(this);
    this._pushNewObject = this._pushNewObject.bind(this);
    this.deleteNode = this.deleteNode.bind(this);
    this._cutObject = this._cutObject.bind(this);
    this.onClickBlock = this.onClickBlock.bind(this);
    this.toggleConnect = this.toggleConnect.bind(this);
    this.closeConnectModal = this.closeConnectModal.bind(this);
    this.toggleComponent = this.toggleComponent.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
    this.toggleChangeName = this.toggleChangeName.bind(this);
    this._editNameinNested = this._editNameinNested.bind(this);
    this.changeName = this.changeName.bind(this);

    this.toggleChangeMessage = this.toggleChangeMessage.bind(this);
    this._editMessageinNested = this._editMessageinNested.bind(this);
    this.changeMessage = this.changeMessage.bind(this);

    this.changeDisable = this.changeDisable.bind(this);
    this._editDisableNested = this._editDisableNested.bind(this);
    this._removeCandL = this._removeCandL.bind(this);
    this._toggleFade = this._toggleFade.bind(this);
    this._fireFade = this._fireFade.bind(this);
    this.loadTemp = this.loadTemp.bind(this);

    this.state = {
      data: baisc.data,
      dataType: baisc.dataType,
      events: baisc.events,
      components: baisc.components,
      logics: baisc.logics,
      clickNodeStatus: baisc.clickNodeStatus,
      connectModalOpen: false,
      editNameOpen: false,
      editMessageOpen: false,
      deleteAlertOpen: false,
      checkedComponent: baisc.checkedComponent,
      checkedLogics: baisc.checkedLogics,
      hoverId: false
    };
  }

  loadTemp(type) {
    switch (type) {
      case 'spotify':
        this.setState({
          data: spotify.data,
          dataType: spotify.dataType,
          events: spotify.events,
          components: spotify.components,
          logics: spotify.logics,
          clickNodeStatus: spotify.clickNodeStatus,
          connectModalOpen: false,
          editNameOpen: false,
          editMessageOpen: false,
          deleteAlertOpen: false,
          checkedComponent: spotify.checkedComponent,
          checkedLogics: spotify.checkedLogics,
          hoverId: false
        });
        break;
      case 'airbnb':
        this.setState({
          data: airbnb.data,
          dataType: airbnb.dataType,
          events: airbnb.events,
          components: airbnb.components,
          logics: airbnb.logics,
          clickNodeStatus: airbnb.clickNodeStatus,
          connectModalOpen: false,
          editNameOpen: false,
          editMessageOpen: false,
          deleteAlertOpen: false,
          checkedComponent: airbnb.checkedComponent,
          checkedLogics: airbnb.checkedLogics,
          hoverId: false
        });
        break;
      case 'basic':
        this.setState({
          data: baisc.data,
          dataType: baisc.dataType,
          events: baisc.events,
          components: baisc.components,
          logics: baisc.logics,
          clickNodeStatus: baisc.clickNodeStatus,
          connectModalOpen: false,
          editNameOpen: false,
          editMessageOpen: false,
          deleteAlertOpen: false,
          checkedComponent: baisc.checkedComponent,
          checkedLogics: baisc.checkedLogics,
          hoverId: false
        });
        break;
      default:
        return null;
    }
  }
  addNode(type) {
    const targetId = this.state.clickNodeStatus.id
    const root = [ ...this.state.data ];
    this._pushNewObject(root, targetId, type);
    this.setState({data: root});
  }
  _pushNewObject(root, targetId, type) {
    if (root instanceof Array) {
      for (var i = 0; i < root.length; i++) {
        this._pushNewObject(root[i], targetId, type);
      }
    }
    else {
      for (var prop in root) {
        if (prop === 'id') {
          if (root[prop] === targetId) {
            const dataset = (type, id) => {
              const typeName = (type) => {
                switch (type) {
                  case 'p': return 'page';
                  case 'e': return 'event';
                  case 'c': return 'component';
                  case 'l': return 'logic';
                  default: return 'page';
                };
              };
              return ({
                id: id,
                name: typeName(type),
                parent: {id: root.id},
                children: [],
                disable: type==='l' ? true : root.disable,
                type: type,
                fadeOpen: false,
                log: [],
                message: 'Information from this event'
              });
            };
            const eventset = (id) => {
              return ({
                id: id,
                name: 'event',
                connects: [],
                logics: []
              });
            };
            const logicset = (id) => {
              return ({
                id: id,
                name: 'logic',
                disable: false
              });
            };
            const codeId = Date.now().toString();


            switch (type) {
              case 'p':
                root.children.push(dataset('p', codeId));
                break;
              case 'e':
                root.children.push(dataset('e', codeId));
                this.setState(prevState => ({events: [ ...prevState.events, eventset(codeId) ] }));
                break;
              case 'c':
                root.children.push(dataset('c', codeId));
                this.setState(prevState => ({components: [ ...prevState.components, dataset('c', codeId) ] }));
                break;
              case 'l':
                root.children.push(dataset('l', codeId));
                this.setState(prevState => ({logics: [ ...prevState.logics, logicset(codeId) ] }));
                break;
              default:
                return null;
            }
          }
        }
        if (prop === 'children') {
          if (root[prop].length > 0) {
            for (var j = 0; j < root[prop].length; j++) {
              this._pushNewObject(root[prop][j], targetId, type);
            }
          }
        }
      }
    }
  }
  deleteNode() {
    const targetId = this.state.clickNodeStatus.id;
    const targetParent =  this.state.clickNodeStatus.parent.id;
    const root = [ ...this.state.data ];
    const events = [...this.state.events];

    // delete the children if they are components or logics
    this._removeCandL(root, targetId);
    // delete node in root data
    this._cutObject(root, targetId, targetParent);
    this.setState({data: root});

    // delete connects in events array
    if (this.state.clickNodeStatus.type==='c') {
      const newcomponents = this.state.components.filter( c => {
        return c.id !== targetId;
      });
      for (let i = 0; i < events.length; i++) {
        const newConnects = events[i].connects.filter( c => {
          return c.id !== targetId;
        });
        events[i].connects = newConnects;
      }
      this.setState({events: events, components: newcomponents});
    }
    if (this.state.clickNodeStatus.type==='l') {
      const newlogics = this.state.logics.filter( l => {
        return l.id !== targetId;
      });
      for (let i = 0; i < events.length; i++) {
        const newLogicsInEvents = events[i].logics.filter( l => {
          return l.id !== targetId;
        });
        events[i].logics = newLogicsInEvents;
      }
      this.setState({events: events, logics: newlogics});
    }
    //delete the events
    if (this.state.clickNodeStatus.type==='e') {
      const newevents = events.filter( e => {
        return e.id !== targetId;
      });
      this.setState({events: newevents});
    }
  }
  _cutObject(root, targetId, targetParent) {
    if (root instanceof Array) {
      for (var i = 0; i < root.length; i++) {
        this._cutObject(root[i], targetId, targetParent);
      }
    }
    else {
      for (var prop in root) {
        if (prop === 'id') {
          if (root[prop] === targetParent) {
            let index = root.children.map( child => { return child.id;}).indexOf(targetId);
            root.children.splice(index, 1);
            // set current selected to the parent component
            this.setState({clickNodeStatus: root});
          }
        }
        if (prop === 'children') {
          if (root[prop].length > 0) {
            for (var j = 0; j < root[prop].length; j++) {
              this._cutObject(root[prop][j], targetId, targetParent);
            }
          }
        }
      }
    }
  }
  _removeCandL(root, targetId) {
    const currentComponents = [ ...this.state.components ];
    const currentLogics = [ ...this.state.logics ];
    const currentEvents = [ ...this.state.events ];
    const removeCId = [];
    const removeLId = [];

    const searchId = (root, targetId, forChildren) => {
      if (root instanceof Array) {
        for (var i = 0; i < root.length; i++) {
          searchId(root[i], targetId, false);
        }
      }
      else {
        for (var prop in root) {
          if (prop === 'id') {
            if (root[prop] === targetId) {
              searchId(root, 'NOID', true);
            }
          }
          if (prop === 'children') {
            if (root[prop].length > 0) {
              for (let j = 0; j < root[prop].length; j++) {
                if (forChildren===true) {
                  searchId(root[prop][j], 'NOID', true);
                } else {
                  searchId(root[prop][j], targetId, false);
                }
              }
            }
          }
          if (prop === 'type' && forChildren) {
            if (root[prop] === 'c') {
              removeCId.push(root.id);
            }
            if (root[prop] === 'l') {
              removeLId.push(root.id);
            }
          }
        }
      }
    };

    const removeId = (arr, ids) => {
      return arr.filter( ({id}) => !ids.includes(id));
    };

    searchId(root, targetId, false);
    const newComponents = removeId(currentComponents, removeCId);
    const newlogics = removeId(currentLogics, removeLId);

    for (let i = 0; i < currentEvents.length; i++) {
      const newComponentsInEvents = removeId(currentEvents[i].connects, removeCId);
      const newLogicsInEvents = removeId(currentEvents[i].logics, removeLId);

      currentEvents[i].connects = newComponentsInEvents;
      currentEvents[i].logics = newLogicsInEvents;
    }


    this.setState({ components: newComponents, logics: newlogics, events: currentEvents});
  }
  onClickBlock(item) {
    if (item.type==='e') {
      const currentEvent = this.state.events.filter(e => {
        return e.id === item.id;
      })[0];
      // fire the linked component and logic
      const root = [ ...this.state.data ];
      for (let i = 0; i < currentEvent.logics.length; i++) {
        this._editDisableNested(root, currentEvent.logics[i].id, false);
      }
      this._fireFade(root, currentEvent, item);
      this.setState({data: root, checkedLogics: currentEvent.logics, checkedComponent: currentEvent.connects});
    }
    this.setState({clickNodeStatus: item});
  }
  _fireFade(data, currentEvent, item) {
    const root = data;

    // fade out the info first
    for (let i = 0; i < currentEvent.connects.length; i++) {
      this._toggleFade(root, currentEvent.connects[i].id, item.message, false);
    }
    this.setState({data: root});

    // fade in the new info
    setTimeout(() => {
      for (let i = 0; i < currentEvent.connects.length; i++) {
        this._toggleFade(root, currentEvent.connects[i].id, item.message, true);
      }
      this.setState({data: root});
    }, 300);
  }
  _toggleFade(root, targetId, log, value) {
    if (root instanceof Array) {
      for (var i = 0; i < root.length; i++) {
        this._toggleFade(root[i], targetId, log, value);
      }
    }
    else {
      for (var prop in root) {
        if (prop === 'id') {
          if (root[prop] === targetId) {
            const prevlog = [...root.log];
            root.fadeOpen = value;
            if (value===true) {
              root.log = [...prevlog, log];
            }
          }
        }
        if (prop === 'children') {
          if (root[prop].length > 0) {
            for (let j = 0; j < root[prop].length; j++) {
              this._toggleFade(root[prop][j], targetId, log, value);
            }
          }
        }
      }
    }
  }
  toggleHover(item, value) {
    if (item.type==='e') {
      if (value===true) {
        this.setState({hoverId: item.id});
      } else {
        this.setState({hoverId: false})
      }
    }
  }
  toggleConnect() {
    this.setState({connectModalOpen: true});
  }
  closeConnectModal() {
    this.setState({connectModalOpen: false});
  }
  toggleComponent(item, type) {
    const { checkedComponent, checkedLogics } = this.state;
    const eventId = this.state.clickNodeStatus.id;
    const eventIndex = this.state.events.map(e => {
      return e.id;
    }).indexOf(eventId);

    if (type==='component') {
      const currentIndex = checkedComponent.map( c => {
          return c.id;
      }).indexOf(item.id);
      const newConnects = [...this.state.events[eventIndex].connects];

      if (currentIndex === -1) {
        newConnects.push({
          id: item.id,
          name: item.name
        });

        const newevents = this.state.events.map(e => {
          if (e.id===eventId) {
            return ({ ...e, connects: [...newConnects]});
          } else {
            return ({ ...e});
          }
        });

        this.setState({events: newevents, checkedComponent: newConnects});
      }
      else {
        newConnects.splice(currentIndex, 1);
        // currentPathSet.splice(currentIndex, 1);
        const newevents = this.state.events.map(e => {
          if (e.id===eventId) {
            return ({ ...e, connects: [...newConnects]});
          } else {
            return ({ ...e});
          }
        });

        this.setState({events: newevents, checkedComponent: newConnects});
      }
    }
    // for logic
    else {
      const currentIndex = checkedLogics.map( l => {
          return l.id;
      }).indexOf(item.id);
      const newlogics = [...this.state.events[eventIndex].logics];

      if (currentIndex === -1) {
        newlogics.push({
          id: item.id,
          name: item.name
        });

        const newevents = this.state.events.map(e => {
          if (e.id===eventId) {
            return ({ ...e, logics: [...newlogics]});
          } else {
            return ({ ...e});
          }
        });

        this.setState({events: newevents, checkedLogics: newlogics});
      }
      else {
        newlogics.splice(currentIndex, 1);
        // currentPathSet.splice(currentIndex, 1);
        const newevents = this.state.events.map(e => {
          if (e.id===eventId) {
            return ({ ...e, logics: [...newlogics]});
          } else {
            return ({ ...e});
          }
        });

        this.setState({events: newevents, checkedLogics: newlogics});
      }
    }
  }
  toggleChangeName() {
    this.setState(prevState => ({editNameOpen: !prevState.editNameOpen}));
  }
  changeName(event) {
    const targetId = this.state.clickNodeStatus.id;
    const root = [ ...this.state.data ];
    const newName = event.target.value;
    this._editNameinNested(root, targetId, newName);

    // rename connects in events array
    if (this.state.clickNodeStatus.type==='c') {
      const newcomponents = [...this.state.components];
      const events = [...this.state.events];
      const tIndex = newcomponents.map(c => { return c.id; }).indexOf(targetId);
      newcomponents[tIndex].name = newName;

      for (let i = 0; i < events.length; i++) {
        const tIndex = events[i].connects.map(c => { return c.id; }).indexOf(targetId);
        if (tIndex !== -1) {
          events[i].connects[tIndex].name= newName;
        }
      }
      this.setState({data: root, events: events, components: newcomponents});
    }
    else if (this.state.clickNodeStatus.type==='l') {
      const newlogics = [...this.state.logics];
      const events = [...this.state.events];
      const tIndex = newlogics.map(l => { return l.id; }).indexOf(targetId);
      newlogics[tIndex].name = newName;

      for (let i = 0; i < events.length; i++) {
        const tIndex = events[i].logics.map(l => { return l.id; }).indexOf(targetId);
        if (tIndex !== -1) {
          events[i].logics[tIndex].name= newName;
        }
      }
      this.setState({data: root, events: events, logics: newlogics});
    }
    else if (this.state.clickNodeStatus.type==='e') {
      const events = [...this.state.events];
      const tIndex = events.map(e => { return e.id; }).indexOf(targetId);
      events[tIndex].name = newName;
      this.setState({data: root, events: events});
    }
    else {
      this.setState({data: root});
    }
  }
  _editNameinNested(root, targetId, newName) {
    if (root instanceof Array) {
      for (var i = 0; i < root.length; i++) {
        this._editNameinNested(root[i], targetId, newName);
      }
    }
    else {
      for (var prop in root) {
        if (prop === 'id') {
          if (root[prop] === targetId) {
            console.log(root);
            root.name = newName;
          }
        }
        if (prop === 'children') {
          if (root[prop].length > 0) {
            for (var j = 0; j < root[prop].length; j++) {
              this._editNameinNested(root[prop][j], targetId, newName);
            }
          }
        }
      }
    }
  }

  toggleChangeMessage() {
    this.setState(prevState => ({editMessageOpen: !prevState.editMessageOpen}));
  }
  changeMessage(event) {
    const targetId = this.state.clickNodeStatus.id;
    const root = [ ...this.state.data ];
    const newMessage = event.target.value;
    this._editMessageinNested(root, targetId, newMessage);
    this.setState({data: root});
  }
  _editMessageinNested(root, targetId, newMessage) {
    if (root instanceof Array) {
      for (var i = 0; i < root.length; i++) {
        this._editMessageinNested(root[i], targetId, newMessage);
      }
    }
    else {
      for (var prop in root) {
        if (prop === 'id') {
          if (root[prop] === targetId) {
            root.message = newMessage;
          }
        }
        if (prop === 'children') {
          if (root[prop].length > 0) {
            for (var j = 0; j < root[prop].length; j++) {
              this._editMessageinNested(root[prop][j], targetId, newMessage);
            }
          }
        }
      }
    }
  }


  changeDisable(e, boolean, id) {
    const targetId = id !== undefined ? id : this.state.clickNodeStatus.id;
    const root = [ ...this.state.data ];

    this._editDisableNested(root, targetId, false);
    this.setState({data: root});
  }
  _editDisableNested(root, targetId, forChildren) {
    if (root instanceof Array) {
      for (var i = 0; i < root.length; i++) {
        this._editDisableNested(root[i], targetId, false);
      }
    }
    else {
      for (var prop in root) {
        if (prop === 'id') {
          if (root[prop] === targetId) {
            //change the logic block disable if it's not a logic block
            if (forChildren === true) {
              //stop change disable if there is a child logic
              if (root.type !== 'l') {
                const newState = !root.disable;
                root.disable = newState;
                //change all of children in this logic block
                for (let i = 0; i < root.children.length; i++) {
                  this._editDisableNested(root.children[i], root.children[i].id, true);
                }
              }
            }
            else {
              const newState = !root.disable;
              root.disable = newState;
              //change all of children in this logic block
              for (let i = 0; i < root.children.length; i++) {
                this._editDisableNested(root.children[i], root.children[i].id, true);
              }
            }
          }
        }
        if (prop === 'children') {
          if (root[prop].length > 0) {
            for (var j = 0; j < root[prop].length; j++) {
              this._editDisableNested(root[prop][j], targetId, false);
            }
          }
        }
      }
    }
  }
  componentDidUpdate() {
    // save the root tree in cookie
    const name = this.state.dataType;
    const value = {...this.state}
    Cookies.set(name, value, {domain: null});
  }
  componentDidMount() {
    // load the root tree if user has made one before
    const name = this.state.dataType;
    const value = Cookies.getJSON(name);
    if (value) {
      this.setState({...value});
    }

    this.loadTemp('basic');
  }
  render() {
    return (
      <div className='main-body'>
        <Header loadTemp={this.loadTemp}/>
        <div className='main-container'>
          <LeftContainer
            classes={this.props.classes}
            render={this.props.render}
            direction={this.props.direction}
            data={this.state.data}
            clickNodeStatus={this.state.clickNodeStatus}
            toggleHover={this.toggleHover}
            hoverId={this.state.hoverId}
            onClickBlock={(item) => this.onClickBlock(item)}
            events={this.state.events}
          />
          {this.state.clickNodeStatus ?
            <RightContainer
              item={this.state.clickNodeStatus}
              checkedC={this.state.checkedComponent}
              addNode={this.addNode}
              connect={this.toggleConnect}
              deleteNode={this.deleteNode}
              toggleChangeName={this.toggleChangeName}
              toggleChangeMessage={this.toggleChangeMessage}
              changeDisable={this.changeDisable}
            /> : null
          }
          <ConnectModal
            open={this.state.connectModalOpen}
            handleClose={this.closeConnectModal}
            components={this.state.components}
            logics={this.state.logics}
            checkedCId={this.state.checkedComponent.map(c => {return c.id;})}
            checkedLId={this.state.checkedLogics.map(l => {return l.id;})}
            toggleCheck={this.toggleComponent}
          />
          <EditNameModal
            open={this.state.editNameOpen}
            handleClose={this.toggleChangeName}
            name={this.state.clickNodeStatus.name}
            type={this.state.clickNodeStatus.type}
            changeName={this.changeName}
          />
        <EditMessageModal
            open={this.state.editMessageOpen}
            handleClose={this.toggleChangeMessage}
            message={this.state.clickNodeStatus.message}
            changeMessage={this.changeMessage}
          />
        </div>
      </div>
    );
  };
}
Main.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object),
  render: PropTypes.func,
  onClick: PropTypes.func,
  direction: PropTypes.bool,
};

Main.defaultProps = {
  classes: {
    lines: {
      height: '60px',
      width: '2px',
    },
    node: {},
    text: {},
    arrow: {},
  },
  render: null,
  direction: false,
};

export default Main;
