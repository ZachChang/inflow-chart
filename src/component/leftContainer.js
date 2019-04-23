import React, { Component } from 'react';
import NodeContainer from './node';
import { Root } from './styles';

class LeftContainer extends Component {
  constructor() {
    super();
    this.kobe = this.kobe.bind(this);
  }
  kobe() {
    console.log(this.refs.postionBase.scrollLeft, this.refs.postionBase.scrollTop);
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
                onClick={(item) => this.props.onClickBlock(item)}
                classes={{ ...classes }}
                render={render}
                direction={direction}
                round={multiChild}
                selectedID={this.props.clickNodeStatus ? this.props.clickNodeStatus.id : 0}
                pathSet={this.props.pathSet}
                scrollLeft={this.refs.postionBase ? this.refs.postionBase.scrollLeft : 0}
                scrollTop={this.refs.postionBase ? this.refs.postionBase.scrollTop ? this.refs.postionBase.scrollTop : 0 : 0}
              >
                {branch.children.length > 0 && renderTree(branch.children, nextWithSingleChild)}
              </NodeContainer>
            );
          })}
        </Root>
      );
    };
    return (
      <div className='left-container' id='linecanvas' ref='postionBase'>
        {renderTree(this.props.data, false)}
      </div>
    );
  }
}
export default LeftContainer;
