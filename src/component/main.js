import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NodeContainer from './node';
import { Root } from './styles';

class Main extends Component {
  render() {
    const data = [
      {id: 1, name: 'homepage', parent: null, children: [
        {id: 2, parent: {id: 1}, name: 'page01', children: []},
        {id: 3, parent: {id: 1}, name: 'page02', children: [
          {id: 4, parent: {id: 3}, name: 'page02-1', children: []}
        ]},
        {id: 5, parent: {id: 1}, name: 'page03', children: []},
        {id: 6, parent: {id: 1}, name: 'page04', children: []}
      ]}
    ];

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
              >
                {branch.children.length > 0 && renderTree(branch.children, nextWithSingleChild)}
              </NodeContainer>
            );
          })}
        </Root>
      );
    };

    return renderTree(data, false);
  }
}

Main.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
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
