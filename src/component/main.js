import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RightContainer from './rightContainer';
import LeftContainer from './leftContainer';
import ConnectModal from './connectModal';

const data = [
  {id: 'a1', name: 'homepage', parent: null, type: 'p', children: [
    {id: 'b1', parent: {id: 'a1'}, name: 'page01', type: 'p', children: []},
    {id: 'b2', parent: {id: 'a1'}, name: 'page02', type: 'p', children: [
      {id: 'c1', parent: {id: 'b2'}, name: 'page02-1', type: 'p', children: []}
    ]},
    {id: 'b3', parent: {id: 'a1'}, name: 'page03', type: 'p', children: []},
    {id:'b4', parent: {id: 'a1'}, name: 'page04', type: 'p', children: []}
  ]}
];

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

    this.state = {
      data: data,
      events: [],
      components: [],
      clickNodeStatus: data[0],
      connectModalOpen: false,
      checkedComponent: []
    };
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
              return ({
                id: id,
                name: type + id,
                parent: {id: root.id},
                children: [],
                type: type
              });
            };
            const eventset = (id) => {
              return ({
                id: id,
                name: 'e' + id,
                connects: []
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
    // delete node in root data
    this._cutObject(root, targetId, targetParent);
    const newevents = this.state.events.filter( e => {
      return e.id !== targetId;
    });
    const newcomponents = this.state.components.filter( c => {
      return c.id !== targetId;
    });

    this.setState({data: root, events: newevents, components: newcomponents, clickNodeStatus: null});
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
  onClickBlock(item) {
    if (item.type==='e') {
      const component = this.state.events.filter(e => {
        return e.id === item.id;
      })[0].connects;
      this.setState({checkedComponent: component});
    }
    this.setState({clickNodeStatus: item});
  }
  toggleConnect() {
    this.setState({connectModalOpen: true});
  }
  closeConnectModal() {
    this.setState({connectModalOpen: false});
  }
  toggleComponent(item) {
    const { checkedComponent } = this.state;
    const eventId = this.state.clickNodeStatus.id;
    const eventIndex = this.state.events.map(e => {
      return e.id;
    }).indexOf(eventId);
    const currentIndex = checkedComponent.indexOf(item.id);
    const newConnects = [...this.state.events[eventIndex].connects];
    // const currentPathSet = [...this.state.events[eventIndex].pathSet];

    if (currentIndex === -1) {
      newConnects.push(item.id);
      // get the position of this component in DOM
      // const newPath = _detect(this.state.clickNodeStatus.id, item.id);
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
  render() {
    return (
      <div className='main-container'>
        <LeftContainer
          classes={this.props.classes}
          render={this.props.render}
          direction={this.props.direction}
          data={this.state.data}
          clickNodeStatus={this.state.clickNodeStatus}
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
          /> : null
        }
        <ConnectModal
          open={this.state.connectModalOpen}
          alert={this.state.components.length < 1}
          handleClose={this.closeConnectModal}
          components={this.state.components}
          checked={this.state.checkedComponent}
          toggleCheck={this.toggleComponent}
        />
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
