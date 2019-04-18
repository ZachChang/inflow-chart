import React, { Component } from 'react';
import * as d3 from 'd3';

class Line extends Component {
  constructor() {
    super();
    this.drawLine = this.drawLine.bind(this);
    this.state = {};
  }
  drawLine() {
    var svg = d3.select('#line').append('svg');
    svg.append('path').attr('d', 'M50 150H200C150 0 450 0 400 150H550').style('fill', 'none').style('stroke', 'purple').style('stroke-width', 2);
    console.log('draw!');
  }

  componentDidMount() {
    this.svg = d3.select(this.refs.linecanvas)
  }
  render() {
    return (
      <div className='line-container' id='line'></div>
    );
  }
}
export default Line;
