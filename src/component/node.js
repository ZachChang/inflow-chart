
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  PageWrapper, EventWrapper, ComponentWrapper, Text, Node, Arrow,
} from './styles';
import * as d3 from 'd3';

class NodeContainer extends Component {
  componentDidMount() {
    const w = document.getElementById('a1').clientWidth;
    const h = document.getElementById('a1').clientHeight;

    this.svg = d3.select(this.refs.linecanvas)
      .append('svg')
      .attr('class', 'svg-container')
      // .attr('width', w)
      // .attr('height', h);

      this._renderLine();
  }
  componentDidUpdate() {
    this._renderLine();
  }
  _renderLine() {
    const sl = this.props.scrollLeft;
    const st = this.props.scrollTop;
    const dataset = this.props.pathSet.map( path => ({ x0: path.x0 + sl, y0: path.y0 + st, x1: path.x1 + sl, y1: path.y1 + st}));

    console.log({dataset});

    // bind data
    let path = this.svg.selectAll('path').data(dataset);
    let enter = path.enter();

    // Enter
    path.enter()
      .append('path')
      .attr('d', d => 'M' + (d.x0).toString() + ' ' + (d.y0).toString() + ' ' + 'L' + (d.x1).toString() + ' ' + (d.y1).toString())
      .attr('stroke', 'black')
      .attr('stroke-width', '5px');
  }
  render() {
    return (
      <Node id={this.props.item.id} styles={this.props.classes.lines} ref={this.props.item.id === 'a1' ? 'linecanvas' : null}>
        { this.props.direction && this.props.item.parent && <Arrow color={this.props.classes.lines.color} /> }
        {
        typeof this.props.render === 'function'
          ? React.cloneElement(
            this.props.render(this.props.item),
            {
              onClick: () => this.props.onClick(this.props.item),
              styles: this.props.classes.node,
            },
          )

          : (
            <React.Fragment>
              {(() => {
                switch (this.props.item.type) {
                  case 'p':
                    return  <PageWrapper type={this.props.item.type} id={this.props.item.id} selected={this.props.selectedID} styles={this.props.classes.node} onClick={() => this.props.onClick(this.props.item)}>
                              <Text styles={this.props.classes.text}>{this.props.item.name}</Text>
                            </PageWrapper>;
                  case 'e':
                    return  <EventWrapper type={this.props.item.type} id={this.props.item.id} selected={this.props.selectedID} styles={this.props.classes.node} onClick={() => this.props.onClick(this.props.item)}>
                              <Text styles={this.props.classes.text}>{this.props.item.name}</Text>
                            </EventWrapper>;
                  case 'c':
                    return  <ComponentWrapper type={this.props.item.type} id={this.props.item.id} selected={this.props.selectedID} styles={this.props.classes.node} onClick={() => this.props.onClick(this.props.item)}>
                              <Text styles={this.props.classes.text}>{this.props.item.name}</Text>
                            </ComponentWrapper>;
                  default:
                    return  <PageWrapper type={this.props.item.type} id={this.props.item.id} selected={this.props.selectedID} styles={this.props.classes.node} onClick={() => this.props.onClick(this.props.item)}>
                              <Text styles={this.props.classes.text}>{this.props.item.name}</Text>
                            </PageWrapper>;
                }
              })()}
            </React.Fragment>
          )
      }
        { this.props.children }
      </Node>

    );
  }
}

NodeContainer.propTypes = {
  item: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  classes: PropTypes.objectOf(PropTypes.object),
  render: PropTypes.func,
  onClick: PropTypes.func,
  direction: PropTypes.bool,
  children: PropTypes.node,
  round: PropTypes.bool,
};

NodeContainer.defaultProps = {
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
  children: null,
  round: false,
};

export default NodeContainer;
