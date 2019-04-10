import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NodeContainer from './node';
import { Root, Wrapper, Text } from './styles';

const data = [
  {id: 'a1', name: 'homepage', parent: null, children: [
    {id: 'b1', parent: {id: 'a1'}, name: 'page01', children: []},
    {id: 'b2', parent: {id: 'a1'}, name: 'page02', children: [
      {id: 'c1', parent: {id: 'b2'}, name: 'page02-1', children: []}
    ]},
    {id: 'b3', parent: {id: 'a1'}, name: 'page03', children: []},
    {id:'b4', parent: {id: 'a1'}, name: 'page04', children: []}
  ]}
];

class Main extends Component {
  constructor() {
    super();
    this.addNode = this.addNode.bind(this);
    this._pushNewObject = this._pushNewObject.bind(this);
    this.reduceNode = this.reduceNode.bind(this);
    this._cutObject = this._cutObject.bind(this);
    this.onClickBlock = this.onClickBlock.bind(this);
    this.state = {
      data: data,
      clickNodeStatus: {}
    };
  }
  addNode(targetId) {
    const root = [ ...this.state.data ];
    this._pushNewObject(root, targetId);
    this.setState({data: root});
  }
  _pushNewObject(root, targetId) {
    if (root instanceof Array) {
      for (var i = 0; i < root.length; i++) {
        this._pushNewObject(root[i], targetId);
      }
    }
    else {
      for (var prop in root) {
        if (prop === 'id') {
          if (root[prop] === targetId) {
            root.children.push({
              id: Date.now(),
              name: Date.now(),
              parent: {id: root.id},
              children: []
            });
          }
        }
        if (prop === 'children') {
          if (root[prop].length > 0) {
            for (var j = 0; j < root[prop].length; j++) {
              this._pushNewObject(root[prop][j], targetId);
            }
          }
        }
      }
    }
  }
  reduceNode(targetId) {
    const root = [ ...this.state.data ];
    this._cutObject(root, targetId);
    this.setState({data: root});
  }
  _cutObject(root, targetId) {
    if (root instanceof Array) {
      for (var i = 0; i < root.length; i++) {
        this._cutObject(root[i], targetId);
      }
    }
    else {
      for (var prop in root) {
        if (prop === 'id') {
          if (root[prop] === targetId) {
            // if find the target id on the nest object set the children to an empty array
            root.children = [];
          }
        }
        if (prop === 'children') {
          if (root[prop].length > 0) {
            for (var j = 0; j < root[prop].length; j++) {
              this._cutObject(root[prop][j], targetId);
            }
          }
        }
      }
    }
  }
  addCBlock() {
    var block = this.state.cBlock;
    var num = this.state.cBlockNum;
    if (num !== 0) {
      var blockId = num + 1;
    } else {
      var blockId = num;
    }
    this.setState({
      cBlock: [
        ...block,
        {
          id: num,
          name: `Component${num}`
        }],
      cBlockNum: num + 1
    })
  }
  onClickBlock(item) {
    this.setState({clickNodeStatus: item});
  }


  render() {
    const renderTree = (tree, multiChild) => {
      const {
        classes, render, direction,
      } = this.props;
      const { lines } = classes;
      return (
        <Root styles={lines}>
          {tree.map((branch) => {
            const nextWithSingleChild = branch.children.length > 1;
            return (
              <NodeContainer
                item={branch}
                key={branch.id}
                onClick={(item) => this.onClickBlock(item)}
                classes={{ ...classes }}
                render={render}
                direction={direction}
                round={multiChild}
                addNode={this.addNode}
                reduceNode={this.reduceNode}
              >
                {branch.children.length > 0 && renderTree(branch.children, nextWithSingleChild)}
              </NodeContainer>
            );
          })}
        </Root>
      );
    };

    return (
      <div className='main-container'>
        <div className='right-container'>
          {renderTree(this.state.data, false)}
        </div>
        <div className='left-container'>
          {this.state.clickNodeStatus.id ?
            <React.Fragment>
              <div>id: {this.state.clickNodeStatus.id}</div>
              <div>name: {this.state.clickNodeStatus.name}</div>
            </React.Fragment> : null
          }
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
