import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NodeContainer from './node';
import { Root } from './styles';

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
    this.state = {
      data: data
    };
  }
  addNode(targetId) {
    const root = [ ...this.state.data ];
    this._pushNewObject(root, targetId);
    this.setState({data: root});
    console.log(this.state.data);
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

  render() {
    const renderTree = (tree, multiChild) => {
      const {
        classes, render, onClick, direction,
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
                onClick={onClick}
                classes={{ ...classes }}
                render={render}
                direction={direction}
                round={multiChild}
                addNode={this.addNode}
              >
                {branch.children.length > 0 && renderTree(branch.children, nextWithSingleChild)}
              </NodeContainer>
            );
          })}
        </Root>
      );
    };

    return renderTree(this.state.data, false);
  }
}

Main.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object),
  // data: PropTypes.arrayOf(PropTypes.object).isRequired,
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
  onClick: null,
  direction: false,
};

export default Main;
