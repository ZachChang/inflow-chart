import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RightContainer from './rightContainer';
import LeftContainer from './leftContainer';
import ConnectModal from './connectModal';
import { _detect } from './utils';

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
    this.connect = this.connect.bind(this);
    this.closeConnectModal = this.closeConnectModal.bind(this);
    this.toggleComponent = this.toggleComponent.bind(this);

    this.state = {
      data: data,
      events: [],
      components: [],
      clickNodeStatus: data[0],
      connectModalOpen: false,
      checkedComponent: [],
      pathSet: []
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
            const dataset = (type) => {
              var dateCode = Date.now().toString();
              return ({
                // slice the Date.now to pretent the id is the same in root and components array
                id: dateCode.slice(0, 11),
                name: type + dateCode.slice(0, 11),
                parent: {id: root.id},
                children: [],
                type: type
              });
            };
            switch (type) {
              case 'p':
                root.children.push(dataset('p'));
                break;
              case 'e':
                root.children.push(dataset('e'));
                this.setState(prevState => ({events: [ ...prevState.events, dataset('e') ] }));
                break;
              case 'c':
                root.children.push(dataset('c'));
                this.setState(prevState => ({components: [ ...prevState.components, dataset('c') ] }));
                break;
              default:
                root.children.push({
                  id: Date.now(),
                  name: 'P' + Date.now(),
                  parent: {id: root.id},
                  children: [],
                  type: 'p'
                });
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
    this._cutObject(root, targetId, targetParent);
    this.setState({data: root, clickNodeStatus: null});
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
    this.setState({clickNodeStatus: item});
  }
  connect() {
    this.setState({connectModalOpen: true});
  }
  closeConnectModal() {
    this.setState({connectModalOpen: false});
  }
  toggleComponent(item) {
    const { checkedComponent } = this.state;
    const currentIndex = checkedComponent.indexOf(item.name);
    const newChecked = [...checkedComponent];

    if (currentIndex === -1) {
      newChecked.push(item.name);
      // get the position of this component in DOM
      const currentPathSet = this.state.pathSet;
      const newPath = _detect(this.state.clickNodeStatus.id, item.id);
      console.log('this.state.clickNodeStatus.id', this.state.clickNodeStatus.id);
      console.log('item.id', item.id);
      console.log('newPath', newPath);
      this.setState({ pathSet: [ ...currentPathSet, newPath]})
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      checkedComponent: newChecked,
    });
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
          pathSet={this.state.pathSet}
        />
        <div className='right-container'>
          {this.state.clickNodeStatus ?
            <RightContainer
              item={this.state.clickNodeStatus}
              checkedC={this.state.checkedComponent}
              addNode={this.addNode}
              connect={this.connect}
              deleteNode={this.deleteNode}
            /> : null
          }
        </div>
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
