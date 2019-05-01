import React, { Component } from 'react';
import NodeContainer from './nodeContainer';
import { Root } from './styles';

class LeftContainer extends Component {
  render() {
    const renderTree = (tree, multiChild, disable, type) => {
      const {
        classes, render, direction,
      } = this.props;
      const { lines } = classes;
      return (
        <Root styles={lines} disabledstyle={disable}>
          {tree.map((branch) => {
            const nextWithSingleChild = branch.children.length > 1;
            return (
              <NodeContainer
                item={branch}
                key={branch.id}
                onClick={(item) => this.props.onClickBlock(item)}
                classes={{ ...classes }}
                render={render}
                direction={direction}
                round={multiChild}
                selected={this.props.clickNodeStatus}
                events={this.props.events}
                toggleHover={(item, value) => this.props.toggleHover(item, value)}
                hoverId={this.props.hoverId}
                scrollLeft={this.refs.postionBase ? this.refs.postionBase.scrollLeft : 0}
                scrollTop={this.refs.postionBase ? this.refs.postionBase.scrollTop ? this.refs.postionBase.scrollTop : 0 : 0}
              >
                {branch.children.length > 0 && renderTree(branch.children, nextWithSingleChild, branch.disable, branch.type)}
              </NodeContainer>
            );
          })}
        </Root>
      );
    };
    return (
        <div className='left-container' ref='postionBase'>
          {renderTree(this.props.data, false, false)}
        </div>
    );
  }
}
export default LeftContainer;
