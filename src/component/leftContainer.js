import React, { Component } from 'react';
import NodeContainer from './node';
import { Root } from './styles';
import * as d3 from 'd3';

class LeftContainer extends Component {
  componentDidMount() {
    const w = document.getElementById('linecanvas').clientWidth;
    const h = document.getElementById('linecanvas').clientHeight;

    this.svg = d3.select(this.refs.linecanvas)
      .append('svg')
      .attr('class', 'svg-container')
      .attr('width', w)
      .attr('height', h);

      this._renderLine();
  }
  componentDidUpdate() {
    this._renderLine();
  }
  _renderLine() {
    const dataset = this.props.pathSet;

    //bind data
    let path = this.svg.selectAll('path').data(dataset);
    let enter = path.enter();

    // Enter
    path.enter()
      .append('path')
      .attr('d', d => 'M' + (d.x0).toString() + ' ' + (d.y0).toString() + ' ' + 'L' + (d.x1).toString() + ' ' + (d.y1).toString())
      .attr('stroke', 'black')
      .attr('stroke-width', '5px');

      console.log('path', path);
      console.log('enter', enter);

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
              >
                {branch.children.length > 0 && renderTree(branch.children, nextWithSingleChild)}
              </NodeContainer>
            );
          })}
        </Root>
      );
    };
    return (
      <div className='left-container' id='linecanvas' ref='linecanvas'>
        {renderTree(this.props.data, false)}
      </div>
    );
  }
}
export default LeftContainer;
